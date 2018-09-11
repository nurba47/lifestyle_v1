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
    let {
      ready,
      rewards,
      onNewRewardAdd,
      onRowValueChange,
      computedResult
    } = this.props.rewardsCtrl;

    if (!ready) return null;

    if (!rewards.length) onNewRewardAdd();

    return (
      <div>
        <h3 style={{ padding: "20px" }}>Список вознаграждений</h3>
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
              <TableRow key={i} {...r} index={i} onRowChange={onRowValueChange} />
            ))}
          </tbody>
        </Table>
        <button onClick={onNewRewardAdd}>Добавить</button>
      </div>
    );
  }
}
