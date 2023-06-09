import React, { useState} from "react";
import "./ActionModal.css"
import FormInput from "../input/FormInput";

function ActionModal (props){
    // const [form,setForm] = useState({fistName: '',lastName : "" , email : ""})
    const {first_name,last_name} = props.data
    const [firstName,setFirstName] = useState(first_name)
    const [lastName,setLastName] = useState(last_name)
    const [email,setEmail] = useState(props.data.email)
    const [position,setPosition] = useState(props.data.position)
    const [age,setAge] = useState(props.data.age)
    function closeModal(){
        props.closeModal(false)

        setPosition("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setAge("")
    }


    function submit(){
       const form = {
           age,email,position,
           first_name:firstName,
           last_name:lastName
       }

       props.editUser(form)
        props.closeModal(false)
        setPosition("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setAge("")


    }
    return(
        <div className="modal-class modal"  >
            <div className="modal-items">
                <p className="modal-title">User Edit</p>
                <form action="" className="modal-content  mt-2 border-0">
                    <FormInput label="First Name" placeholder="Valisher" type="text" modelValue={firstName} changeInput={(e)=> setFirstName(e)} />
                    <FormInput label="Last Name" placeholder="Botirov" type="text" modelValue={lastName} changeInput={(e)=> setLastName(e)} />
                    <FormInput label="Email address" placeholder="name@example.com" type="email" modelValue={email} changeInput={(e)=> setEmail(e)} />
                    <FormInput label="Position" placeholder="CEO" type="text" modelValue={position} changeInput={(e)=> setPosition(e)} />
                    <FormInput label="Age" placeholder="21" type="number" modelValue={age} changeInput={(e)=> setAge(e)} />
                </form>
                <div className="modal-action">
                    <div className="btn btn-primary" onClick={submit}>Saqlash</div>
                    <div className="btn btn-danger btn-transtion" onClick={closeModal}>Bekor qilish</div>
                </div>
            </div>
        </div>
    )
}

export default  ActionModal