import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Row, Table, ButtonGroup, Button } from "react-bootstrap";
import TableRow from "./Row";
import SelectUser from "./SelectUser";
import RadioYesNo from "./RadioYesNo";
import Points from "./Points";

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
      extraData,

      onUserSelect,
      onTotalPointsChange,
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
    let { active, benefits, points, totalPoints } = extraData;

    if (!ready) return null;

    return (
      <div>
        <h3 className="pt-2">Список вознаграждений</h3>
        <SelectUser value={currentUserId} users={users} onChange={onUserSelect} />

        <Row className="justify-content-around">
          <RadioYesNo label="Активность" value={active ? 1 : 0} onChange={onActiveToggle} />
          <RadioYesNo label="Льготы" value={benefits ? 1 : 0} onChange={onBenefitsToggle} />
        </Row>

        {points && (
          <Points
            totalPoints={totalPoints}
            onTotalPointsChange={onTotalPointsChange}
            points={points}
            onPointsSelect={onPointsSelect}
          />
        )}

        <h5>
          Вознаграждение <strong>{computedResult} сомов</strong>
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
