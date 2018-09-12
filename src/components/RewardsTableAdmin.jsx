import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import TableRow from "./Row";
import UserSelect from "./UserSelect";

@inject("authCtrl", "rewardsCtrl")
@observer
export default class extends Component {
  componentDidMount() {
    this.props.rewardsCtrl.loadForAdmin();
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
      onSaveRewards,
      onCancelRewards,
      onRowValueChange,
      onRowRemove,
      computedResult
    } = this.props.rewardsCtrl;

    if (!ready) return null;

    return (
      <div>
        <h3 className="pt-3">Список вознаграждений</h3>
        <UserSelect users={users} onChange={onUserSelect} />
        <h5>
          Вознаграждение <strong>{computedResult}</strong>
        </h5>

        <Table responsive striped bordered condensed>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th style={{ width: "30%" }}>Дата</th>
              <th style={{ width: "30%" }}>Поступления</th>
              <th style={{ width: "30%" }}>Снял</th>
              <th style={{ width: "10%" }}>Удалить</th>
            </tr>
          </thead>

          <tbody>
            {rewards.map((r, i) => (
              <TableRow
                key={i}
                {...r}
                index={i}
                onRowChange={onRowValueChange}
                onRowRemove={onRowRemove}
              />
            ))}
          </tbody>
        </Table>
        <ButtonGroup className="d-flex justify-content-center">
          <Button bsStyle="danger" bsSize="small" onClick={onCancelRewards}>
            Отменить
          </Button>
          <Button bsStyle="primary" bsSize="small" onClick={onNewRewardAdd}>
            Добавить
          </Button>
          <Button bsStyle="primary" bsSize="small" onClick={onSaveRewards}>
            Сохранить
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
