/* TODO - add your code to create a functional React component that renders a login form */
import React from "react"
import { useState } from "react";

export default function LogInForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        console.log(data)
    }

    // fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         email: 
    //     })
    // })


    return(
        <>
            <div>
                <form method="post" onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="userEmail" 
                        value={userEmail}
                        onChange={(e)=>{
                            setUserEmail(e.target.value);
                        }} 
                        placeholder="Email Login" />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="userPassword" 
                        onChange={(e)=>{
                            setUserPassword(e.target.value)
                        }}
                        placeholder="Password">
                    </input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>

    )
}