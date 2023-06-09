import React from "react";
import { useNavigate } from "react-router-dom";

function TableRow(props) {
  const navigate = useNavigate();

  const { avatar, first_name, last_name, email, id } = props.user;
  const { index } = props;

  function handleClick() {
    navigate("/create/" + id);
  }

  return (
    <tr onClick={handleClick}>
      <td>{index + 1}</td>
      <td>
        <div className="image-box">
          <img src={avatar} alt="" />
        </div>
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
}

export default TableRow;
