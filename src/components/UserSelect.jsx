import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export default ({ users, onChange }) => {
  users = users || [];
  return (
    <FormGroup>
      <ControlLabel>Выберите пользователя</ControlLabel>
      <FormControl bsSize="sm" componentClass="select" onChange={e => onChange(e.target.value)}>
        {users.map(u => (
          <option key={u._id} value={u._id}>
            {u.email}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  );
};
