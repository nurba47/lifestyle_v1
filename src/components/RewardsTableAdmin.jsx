import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Row, Table, ButtonGroup, Button } from "react-bootstrap";
import TableRow from "./Row";
import SelectUser from "./SelectUser";
import SelectPoints from "./SelectPoints";
import RadioYesNo from "./RadioYesNo";

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
      currentUserId,
      active,
      benefits,
      points,
      onUserSelect,
      onPointsSelect,
      onActiveToggle,
      onBenefitsToggle,
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
        <h3 className="pt-2">Список вознаграждений</h3>
        <SelectUser value={currentUserId} users={users} onChange={onUserSelect} />

        <Row className="justify-content-around">
          {active && <RadioYesNo label="Активность" value={active ? 1 : 0} onChange={onActiveToggle} />}
          {benefits && <RadioYesNo label="Льготы" value={benefits ? 1 : 0} onChange={onBenefitsToggle} />}
        </Row>

        {points && <SelectPoints value={points} onChange={onPointsSelect} />}

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
