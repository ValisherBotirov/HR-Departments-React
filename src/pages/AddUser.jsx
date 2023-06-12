import React, {useMemo, useState} from "react";
import "./UserCreate.css"
import FormInput from "../components/input/FormInput";
import toast,{Toaster} from "react-hot-toast";
import axios from "../plugins/axios";
import useInputHandle from "../hooks/useInputHandle";



function AddUser() {
    //     use with personal hooks
    const firstName = useInputHandle("")
    const lastName = useInputHandle("")
    const [email,setEmail] = useState("")
    const [position,setPosition] = useState("")
    const [age,setAge] = useState("")

function submit(){

    const form = {
        age,email,position,
        first_name:firstName.value,
        last_name:lastName.value
    }

    axios.post("/users",form).then((res)=>{
        console.log(res)
        toast.success("Muvaffaqiyatli qo'shildi!")
    }).catch((err)=>{
        console.log(err)
        toast.error("Xatolik yuz berdi!")
    }).finally(()=>{
        setPosition("")
        // setFirstName("")
        firstName.value = ""
        lastName.value = ""
        setEmail("")
        setAge("")
    })
}

const [counter,setCounter] = useState(0)
const [active,setActive] = useState(true)
    const inc = () =>{
        setCounter(counter => counter+1)
    }

    const reset = () =>{
        setActive(active => active = !active)
    }

    function checkNumber(e){
        console.log("render")
        return e * 2
    }

    const  number = useMemo(()=>{
       return checkNumber(counter)
    },[counter])

  return (
    <div className="container">
      <div className="mx-auto user-create ">
          {/*  <p >{counter}</p>*/}
          {/*<p>CheckNumber is {number}</p>*/}
          {/*<div className="btn btn-primary" onClick={inc}>Increment</div>*/}
          {/*<div className="btn btn-danger" onClick={reset}>Reset</div>*/}

          <h2>User create</h2>
          <form action="" className="mt-2 form-control py-4 px-3">
              <FormInput label="First Name" placeholder="Valisher" type="text" modelValue={firstName.value} changeInput={(e)=>firstName.onChange(e)} />
              <FormInput label="Last Name" placeholder="Botirov" type="text" modelValue={lastName.value} changeInput={(e)=> lastName.onChange(e)} />
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
