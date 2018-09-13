import React from "react";
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, ControlLabel } from "react-bootstrap";

export default ({ value, label, onChange }) => {
  return (
    <div>
      <ControlLabel>{label}</ControlLabel>
      <ButtonToolbar onChange={onChange}>
        <ToggleButtonGroup value={value} type="radio" name={label} onClick={onChange}>
          <ToggleButton value={1} onChange={onChange}>Да</ToggleButton>
          <ToggleButton value={0} onChange={onChange}>Нет</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </div>
  );
};
