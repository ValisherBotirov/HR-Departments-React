import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "../plugins/axios";
import TableRow from "../components/home/TableRow";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("users")
      .then((res) => {
        console.log(res.data.data, "response");
        setUser(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Avatar</th>
            <th>FullName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((user, index) => {
            return <TableRow user={user} index={index} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
