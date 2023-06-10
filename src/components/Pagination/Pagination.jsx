import React, {useEffect, useState} from "react";
import "./Pagination.css"

function Pagination(props){

    const [active,setActive] = useState(1)

    const show = props.showUser
    const endPoint = Math.trunc(props.users.length / show)


    useEffect(()=>{
        props.getCurrenPage(active)
    },[active])

    function handleActive(e){
        setActive(e)
    }

    function handleNext(){
        if(active <= endPoint)
        setActive(active + 1)
    }

    function handlePrev(){
        if (active !== 1 )
        setActive(active-1)
    }

    function renderItems(){
        let arr = []
        for (let i = 0  ; i < show ; i++){
            let item = <li className="page-item" key={i} onClick={()=>handleActive(i+1)}><a className={active === i+1 ? ' page-link active' : 'page-link'} href="#" >{i + 1}</a></li>
           arr.push(item)
        }

        return arr
    }

    return(
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" onClick={handlePrev}>
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        renderItems()

                        // props?.users?.map((el,index)=>{
                        //     return(
                        //         <li className="page-item" key={index} onClick={()=>handleActive(index)}><a className={active === index ? ' page-link active' : 'page-link'} href="#" >{index + 1}</a></li>
                        //     )
                        // })
                    }

                    <li className="page-item" onClick={handleNext}>
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export  default Pagination