import React from "react";

function Pagination(props){
    console.log(props)
    return(
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        props?.count?.map((el,index)=>{
                            return(
                                <li className="page-item"><a className="page-link" href="#">{index + 1}</a></li>
                            )
                        })
                    }

                    <li className="page-item">
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