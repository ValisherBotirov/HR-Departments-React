import {useState} from "react";

function useInputHandle(initialState){
    const [value,setValue] = useState(initialState)

    const  onChange = (e) =>{
        setValue(e)
    }

    return  {value , onChange}

}


export default useInputHandle