import React from "react"
import { useNavigate } from "react-router-dom";

export default function BookTitle({title, id, available}){
    const navigate = useNavigate();
    return(
        <li className={available? 'availableBook': 'notAvailableBook'}onClick={()=>{navigate(`/books/${id}`)}}>
            {title}
        </li>
    )
}