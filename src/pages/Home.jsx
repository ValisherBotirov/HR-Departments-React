import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "../plugins/axios";
import TableRow from "../components/home/TableRow";
import Pagination from "../components/Pagination/Pagination";


function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setUser(res?.data);
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
            <th>Full Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((user, index) => {
            return <TableRow user={user} index={index} key={index} />;
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <Pagination count={user} />
      </div>
    </div>
  );
}

export default Home;
