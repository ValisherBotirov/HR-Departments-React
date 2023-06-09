import React from "react";

function FormInput (props){
    const {label, placeholder,modelValue,type} = props
    function handleInput(e){
        props.changeInput(e.target.value)
    }
    return(
        <div className="mb-3">
            <label htmlFor="firstName" className="form-label">{label}</label>
            <input type={type} className="form-control" id="firstName"
                   placeholder={placeholder} value={modelValue} onChange={handleInput}/>
        </div>
    )
}


export default  FormInput