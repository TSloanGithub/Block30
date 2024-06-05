import React from "react";
import { useState } from "react";


export default function CheckOutBook({token, bookId, GetSingleBookInfo}){
    const [checkedOutBooks, setCheckedOutBooks] = useState([]);
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,{
                method: "PATCH",
                headers:  {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify({
                    available: false,
                })

            })
            const result = await response.json();
            console.log(result);
            setCheckedOutBooks(result);
            GetSingleBookInfo(bookId);
        }catch(error){
            console.error('Error Checking out book')
        }
    }

    return(
        <button onClick={handleSubmit}>Check out book</button>
    )
}