import React from "react";
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, ControlLabel } from "react-bootstrap";

export default ({ value, label, readOnly, onChange }) => {
  return (
    <div>
      <ControlLabel>{label}</ControlLabel>
      <ButtonToolbar onChange={onChange}>
        <ToggleButtonGroup
          value={value}
          type="radio"
          name={label}
          onClick={onChange}>
          <ToggleButton value={1} disabled={readOnly} onChange={onChange}>
            Да
          </ToggleButton>
          <ToggleButton value={0} onChange={onChange} disabled={readOnly}>
            Нет
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </div>
  );
};
