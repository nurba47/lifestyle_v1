import React from "react";
import { Button } from "react-bootstrap";

const styles = {
  width: "100%",
  border: "none",
  backgroundColor: "rgba(0, 0, 0, 0.0)",
  textAlign: "center"
};

const TableRow = ({ date, income, withdraw, readOnly, index, onRowChange, onRowRemove }) => {
  return (
    <tr>
      <td style={{ width: "30%" }}>
        <input
          type="date"
          style={styles}
          readOnly={readOnly}
          value={date}
          onChange={event => onRowChange(index, "date", event.target.value)}
        />
      </td>

      <td style={{ width: "30%" }}>
        <input
          type="number"
          style={styles}
          readOnly={readOnly}
          value={income}
          onChange={event => onRowChange(index, "income", event.target.value)}
        />
      </td>

      <td style={{ width: "30%" }}>
        <input
          type="number"
          style={styles}
          readOnly={readOnly}
          value={withdraw}
          onChange={event => onRowChange(index, "withdraw", event.target.value)}
        />
      </td>

      {!readOnly && (
        <td style={{ textAlign: "center", width: "10%" }}>
          <Button bsStyle="primary" onClick={() => onRowRemove(index)} style={{ height: "15px" }} />
        </td>
      )}
    </tr>
  );
};

export default TableRow;
