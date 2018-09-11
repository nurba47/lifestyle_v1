import React from "react";

const styles = {
  width: "100%",
  border: "none",
  backgroundColor: "rgba(0, 0, 0, 0.0)",
  textAlign: "center"
};

const TableRow = ({ date, income, withdrow, readOnly, index, onRowChange }) => {
  return (
    <tr>
      <td>
        <input
          type="date"
          style={styles}
          readOnly={readOnly}
          value={date}
          onChange={event => onRowChange(index, "date", event.target.value)}
        />
      </td>

      <td>
        <input
          type="number"
          style={styles}
          readOnly={readOnly}
          value={income}
          onChange={event => onRowChange(index, "income", event.target.value)}
        />
      </td>

      <td>
        <input
          type="number"
          style={styles}
          readOnly={readOnly}
          value={withdrow}
          onChange={event => onRowChange(index, "withdrow", event.target.value)}
        />
      </td>
    </tr>
  );
};

export default TableRow;
