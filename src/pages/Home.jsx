import React, {useContext, useEffect, useState} from "react";
import "./Home.css";
import axios from "../plugins/axios";
import TableRow from "../components/home/TableRow";
import Pagination from "../components/Pagination/Pagination";
import {Context} from "../store";


function Home() {
  const [user, setUser] = useState([]);
  const [allUser,setAllUser] = useState(null)
  const [currentPage,setCurrentPage] = useState(1)
  const limit = 10

    const {state,dispatch} = useContext(Context)


  useEffect(()=>{
    axios
        .get("/users",)
        .then((res) => {
          setAllUser(res?.data.length);

        })
        .catch((err) => {
          console.log(err);
        });


  },[])

  useEffect(() => {
    axios
      .get("/users",{
        params:{
          _limit : limit,
          _page:currentPage,
        }
      })
      .then((res) => {
        setUser(res?.data);
          dispatch({type :"GET_USERS",payload:res?.data})
        setTimeout(()=>{
            mounted()
        },3000)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  function  mounted(){
      console.log(state,"all store")
  }

  function getCurrenPage(page){
    setCurrentPage(page)
  }

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
          {state.users?.map((user, index) => {
            return <TableRow user={user} index={index} key={index} />;
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <Pagination users={allUser} showUser={limit} getCurrenPage={getCurrenPage}/>
      </div>
    </div>
  );
}

export default Home;
