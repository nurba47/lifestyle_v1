import React from "react";
import SelectPoints from "./SelectPoints";
import FieldGroup from "./FieldGroup";

export default ({ totalPoints, onTotalPointsChange, points, onPointsSelect }) => {
  return (
    <div>
      <SelectPoints value={points} onChange={onPointsSelect} />
      <FieldGroup
        id="totalPoints"
        label="Общее количество баллов"
        type="number"
        value={totalPoints}
        onChange={onTotalPointsChange}
      />
    </div>
  );
};
