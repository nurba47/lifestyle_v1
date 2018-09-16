import React from "react";
import SelectPoints from "./SelectPoints";
import FieldGroup from "./FieldGroup";

export default ({ totalPoints, onTotalPointsChange, points, onPointsSelect, readOnly }) => {
  return (
    <div>
      <SelectPoints value={points} onChange={onPointsSelect} readOnly={readOnly}/>
      <FieldGroup
        id="totalPoints"
        label="Общее количество баллов"
        type="number"
        value={totalPoints}
        onChange={onTotalPointsChange}
        readOnly={readOnly}
      />
    </div>
  );
};
