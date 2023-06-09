import React from "react";
import { useNavigate } from "react-router-dom";

function TableRow(props) {
  const navigate = useNavigate();

  const { position,age, first_name, last_name, email, id } = props.user;
  const { index } = props;

  function handleClick() {
    navigate("/create/" + id);
  }

  return (
    <tr onClick={handleClick}>
      <td>{index + 1}</td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
      <td>{position}</td>
      <td>{age}</td>
    </tr>
  );
}

export default TableRow;
