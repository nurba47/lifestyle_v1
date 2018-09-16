import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const benefits = [
  { name: "100", value: 100 },
  { name: "250", value: 250 },
  { name: "400", value: 400 }
];

export default ({ value, readOnly, onChange }) => {
  return (
    <FormGroup controlId="selectPoints">
      <ControlLabel>Баллы</ControlLabel>
      <FormControl
        bsSize="sm"
        componentClass="select"
        value={value}
        disabled={readOnly}
        onChange={e => onChange(e.target.value)}>
        {benefits.map(b => (
          <option key={b.value} value={b.value}>
            {b.name}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  );
};
