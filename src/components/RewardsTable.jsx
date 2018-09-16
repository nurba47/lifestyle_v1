import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Row, Table } from "react-bootstrap";
import TableRow from "./Row";
import Points from "./Points";
import RadioYesNo from "./RadioYesNo";

@inject("rewardsCtrl")
@observer
export default class RewardsTable extends Component {
  componentDidMount() {
    this.props.rewardsCtrl.load();
  }

  componentWillUnmount() {
    this.props.rewardsCtrl.reset();
  }

  render() {
    let { ready, rewards, extraData, computedResult } = this.props.rewardsCtrl;
    let { active, benefits, points, totalPoints } = extraData;

    if (!ready) return null;

    let shouldRenderTable = rewards && rewards.length > 0;
    return (
      <div>
        {shouldRenderTable && (
          <div>
            <h3>Список вознаграждений</h3>
            <Row className="justify-content-around">
              <RadioYesNo label="Активность" value={active ? 1 : 0} readOnly />
              <RadioYesNo label="Льготы" value={benefits ? 1 : 0} readOnly />
            </Row>

            {points && <Points totalPoints={totalPoints} points={points} readOnly />}
            <h5>
              Вознаграждение <strong>{computedResult}</strong>
            </h5>

            <Table responsive striped bordered condensed>
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th>Дата</th>
                  <th>Поступления</th>
                  <th>Снял</th>
                </tr>
              </thead>
              <tbody>
                {rewards.map((r, i) => (
                  <TableRow readOnly key={i} {...r} index={i} />
                ))}
              </tbody>
            </Table>
          </div>
        )}

        {!shouldRenderTable && (
          <div>
            <h3>Нет вознаграждений</h3>
          </div>
        )}
      </div>
    );
  }
}
