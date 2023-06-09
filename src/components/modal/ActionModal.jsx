import React, {useEffect, useState} from "react";
import "./ActionModal.css"

function ActionModal (props){
    const [openModal,setOpenModal] = useState(props.isOpen)
    // const [form,setForm] = useState({fistName: '',lastName : "" , email : ""})
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    function closeModal(){
        setOpenModal(false)
        props.closeModal(openModal)
    }

    function handleInput(e){
        // console.log(e)
        const { name, value } = e.target;

        if(name === "firstName"){
            setFirstName(value)
        }
        else if(name === "lastName"){
            setLastName(value)
        }
        else if(name === "email"){
             setEmail(value)
        }

    }

    function submit(){
       const form = {
           firstName ,
           lastName,
           email
       }

       props.getForm(form)

        setEmail("")
        setFirstName("")
        setLastName("")
    }
    return(
        <div className={props.isOpen ? 'modal-class modal' : 'modal'} >
            <div className="modal-items">
                <p className="modal-title">User Edit</p>
                <form action="" className="modal-content  mt-2 border-0">
                    <input type="text" className="form-control" placeholder="First Name" name='firstName' value={firstName} onChange={handleInput}/>
                    <input type="text" className="form-control mt-3" placeholder="Last Name" name='lastName' value={lastName} onChange={handleInput}/>
                    <input type="email" className="form-control mt-3" placeholder="Email" name='email' value={email} onChange={handleInput}/>
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