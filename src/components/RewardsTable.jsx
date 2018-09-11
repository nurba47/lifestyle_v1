import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TableRow from "./Row";
import { inject, observer } from "mobx-react";

@inject("profileCtrl")
@observer
export default class RewardsTable extends Component {
  render() {
    let { rewards, onNewRewardAdd, onRowValueChange, computedResult } = this.props.profileCtrl;
    if (!rewards.length) onNewRewardAdd();
    return (
      <div>
        <h3 style={{ padding: "20px" }}>Список вознаграждений</h3>
        <h5>{computedResult}</h5>
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
