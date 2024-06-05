/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React, { useEffect } from "react";
import { useState } from "react";
import BookTitle from "./BookTitleListItem";


export default function AccountDetails({token}){
    const [account, setAccount] = useState(null);
    async function returnBooks(reservationId){
    try{
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`,{
            method: "DELETE",
            headers:  {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },

        })
        const result = await response.json();
        console.log(result);
        await getAccount();
        }catch(error){
        console.error('Error Checking out book')
        }
    }
    async function getAccount(){
        try{
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`,{
                headers:  {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
    
            })
            const result = await response.json();
            setAccount(result);
            console.log(result);
            }catch(error){
            console.error('Error Checking out book')
            }
        }

    useEffect(()=>{
        getAccount();
    },[])
    if(account == null)return(<h1>Loading</h1>)
    return(
        <>
        <h1>Welcome {account.firstname}!</h1>
        <ul>
            {account.books.map((book)=>{
            return <>
            <BookTitle key={book.id} title={book.title} id={book.id} available={book.available}/>
            <button onClick={async ()=>await returnBooks(book.id)}>Return book</button>
            </>
            })}
        </ul>
        </>
    )
}

