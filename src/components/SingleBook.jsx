/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutBook from "./Checkout";


export default function SingleBookDetails({token}){
    const params = useParams();
    const [singleBook, setSingleBook] = useState(null);
    async function GetSingleBookInfo (id){
        try{
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
            const result = await response.json();
            setSingleBook(result.book);
        } catch(e){
            console.error(e);
            console.error(`Failed to get book of ${id}`)
        }
    }

    useEffect(()=>{
        GetSingleBookInfo(params.bookId)
    },[])
    if(singleBook == null)return(<h1>Loading</h1>)
    return(
        <>
        <h1>{singleBook.title}</h1>
        {singleBook.available && <CheckOutBook token={token} bookId={singleBook.id} GetSingleBookInfo={GetSingleBookInfo}/>}
        </>
    )
}