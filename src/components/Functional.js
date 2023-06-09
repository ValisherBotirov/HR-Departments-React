import React from "react";

export default function Functional(props) {
  const { name, surname } = props;
  return (
    <div>
      <p>Functional componen</p>
      <pre>
        {name},{surname}
      </pre>
    </div>
  );
}
