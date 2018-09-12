import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Table, Button } from "react-bootstrap";
import TableRow from "./Row";
import UserSelect from "./UserSelect";

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
      users,
      rewards,
      onUserSelect,
      onNewRewardAdd,
      onRowValueChange,
      onRowRemove,
      computedResult
    } = this.props.rewardsCtrl;

    if (!ready) return null;

    return (
      <div>
        <h3 style={{ padding: "20px" }}>Список вознаграждений</h3>
        <UserSelect users={users} onChange={onUserSelect}/>
        <h5>
          Вознаграждение <strong>{computedResult}</strong>
        </h5>

        <Table responsive striped bordered condensed>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th style={{width: "30%"}}>Дата</th>
              <th style={{width: "30%"}}>Поступления</th>
              <th style={{width: "30%"}}>Снял</th>
              <th style={{width: "10%"}}>Удалить</th>
            </tr>
          </thead>
          {rewards && (
            <tbody>
              {rewards.map((r, i) => (
                <TableRow key={i} {...r} index={i} onRowChange={onRowValueChange} onRowRemove={onRowRemove} />
              ))}
            </tbody>
          )}
        </Table>
        <Button onClick={onNewRewardAdd}>Добавить</Button>
      </div>
    );
  }
}
