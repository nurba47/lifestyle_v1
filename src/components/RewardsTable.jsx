import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Table } from "react-bootstrap";
import TableRow from "./Row";

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
    let { ready, rewards, computedResult } = this.props.rewardsCtrl;

    if (!ready) return null;

    let shouldRenderTable = rewards && rewards.length > 0;
    return (
      <div>
        {shouldRenderTable && (
          <div>
            <h3>Список вознаграждений</h3>
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
