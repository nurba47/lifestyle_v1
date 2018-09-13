import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const benefits = [
  { name: "100", value: 100 },
  { name: "200", value: 200 },
  { name: "300", value: 300 }
];

export default ({ value, onChange }) => {
  return (
    <FormGroup>
      <ControlLabel>Льгота</ControlLabel>
      <FormControl
        bsSize="sm"
        componentClass="select"
        value={value}
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
