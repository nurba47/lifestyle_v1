import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export default ({ value, users, onChange }) => {
  users = users || [];
  return (
    <FormGroup controlId="selectUser" bsSize="small">
      <ControlLabel>Выберите пользователя</ControlLabel>
      <FormControl
        bsSize="small"
        componentClass="select"
        value={value}
        onChange={e => onChange(e.target.value)}>
        {users.map(u => (
          <option key={u._id} value={u._id}>
            {u.email}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  );
};
