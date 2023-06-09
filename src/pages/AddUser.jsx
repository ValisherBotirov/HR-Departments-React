import React, {useState} from "react";
import "./UserCreate.css"
import FormInput from "../components/input/FormInput";
import toast,{Toaster} from "react-hot-toast";
import axios from "../plugins/axios";

// import toast from "bootstrap/js/src/toast";

function AddUser() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [position,setPosition] = useState("")
    const [age,setAge] = useState("")

function submit(){

    const form = {
        age,email,position,
        first_name:firstName,
        last_name:lastName
    }

    axios.post("/users",form).then((res)=>{
        console.log(res)
        toast.success("Muvaffaqiyatli qo'shildi!")
    }).catch((err)=>{
        console.log(err)
        toast.error("Xatolik yuz berdi!")
    }).finally(()=>{
        setPosition("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setAge("")
    })
}

  return (
    <div className="container">
      <div className="mx-auto user-create ">
          <h2>User create</h2>
          <form action="" className="mt-2 form-control py-4 px-3">
              <FormInput label="First Name" placeholder="Valisher" type="text" modelValue={firstName} changeInput={(e)=> setFirstName(e)} />
              <FormInput label="Last Name" placeholder="Botirov" type="text" modelValue={lastName} changeInput={(e)=> setLastName(e)} />
              <FormInput label="Email address" placeholder="name@example.com" type="email" modelValue={email} changeInput={(e)=> setEmail(e)} />
              <FormInput label="Position" placeholder="CEO" type="text" modelValue={position} changeInput={(e)=> setPosition(e)} />
              <FormInput label="Age" placeholder="21" type="number" modelValue={age} changeInput={(e)=> setAge(e)} />

              <div className="d-flex justify-content-end mt-4">
                  <div className="btn btn-primary px-5" onClick={submit}>Saqlash</div>
                  <Toaster   position="top-right"/>
              </div>
          </form>
      </div>
    </div>
  );
}

export default AddUser;
