import React, { useEffect, useState } from "react";
import "./UserSingle.css";
import axios from "../plugins/axios";
import {useNavigate, useParams} from "react-router-dom";
import ActionModal from "../components/modal/ActionModal";
import toast,{Toaster} from "react-hot-toast";


function UserSingle() {
  const [data, setData] = useState({});
  const [render,setRender] = useState(true)
  const { id } = useParams();
  const navigate = useNavigate()

  const [openModal,setOpenModal] = useState(false)

  useEffect(() => {
    axios
      .get(`users/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  function  openEditModal(){
    setOpenModal(true)
  }

  function closeModal(emit){
    setOpenModal(emit)
  }

  function editUser(form){
    console.log(form,"parent")
    axios.put(`users/${id}`,form).then((res)=>{
      console.log(res)
      toast.success("Muvaffaqiyatli tahrirlandi")
      setRender(!render)
    }).catch((err)=>{
      toast.error("Tahrirlashda xatolik yuz berdi!")
      console.log(err)
    })
  }

  function deleteUser(){

    alert("Rostdan ham o'chirmoqchimisiz!")


      axios.delete(`/users/${id}`).then((res)=>{
        navigate("/")
        console.log(res)
      })
          .catch((err)=>{
            alert(err)
          })

  }

  return (
      <div>
        {
          openModal ? (
             <ActionModal   data={data} closeModal={closeModal} editUser={editUser}  />
          ): ''
        }
    <div className="container">
      <Toaster position="top-right" />
      <div className="user-box">
        <div className="avatar">
          <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user ingo" />
        </div>
        <div className="user-info">
          <h2>Foydalanuvchi malumotlari</h2>
          <p className="user-info-text">Ismi : {data?.first_name} </p>
          <p className="user-info-text">Familiyasi : {data?.last_name} </p>
          <p className="user-info-text">Email : {data?.email}</p>
          <p className="user-info-text">Position : {data?.position}</p>
          <p className="user-info-text">Age : {data?.age}</p>
          <div className="action-box">
            <div className="btn btn-primary" onClick={openEditModal}>Tahrirlash</div>
            <div className="btn btn-danger" onClick={deleteUser}>O'chirish</div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}

export default UserSingle;
