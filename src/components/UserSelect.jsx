import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export default ({ users, onChange }) => {
  users = users || [];
  return (
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Выберите пользователя</ControlLabel>
      <FormControl bsSize="sm" componentClass="select" onChange={onChange}>
        {users.map(u => (
          <option value={u._id}>{u.email}</option>
        ))}
      </FormControl>
    </FormGroup>
  );
};
