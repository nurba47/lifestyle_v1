import React from "react";
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, ControlLabel } from "react-bootstrap";

export default ({ value, label, onChange }) => {
  return (
    <div>
      <ControlLabel>{label}</ControlLabel>
      <ButtonToolbar>
        <ToggleButtonGroup value={value} type="radio" name={label} onChange={onChange}>
          <ToggleButton value={1}>Да</ToggleButton>
          <ToggleButton value={0}>Нет</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </div>
  );
};
