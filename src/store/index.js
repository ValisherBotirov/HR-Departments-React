import {createContext, useReducer} from "react";


const initialValue = {
    users : [
        {
            age:21,
            first_name : "Valisher",
            last_name : "Botirov",
            email : "Valisherbotirov1218@gmail.com",
            position : "Drektor"
        }
    ],
    name : ""
}

export const  Context = createContext()

const reducer = (state = initialValue,action) =>{
    const {type,payload} = action
    console.log(state,"store state")
    if(type === "GET_USERS"){
        return {...state,users : payload}
    }
}

const Provider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialValue)

    return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
}

export default  Provider
