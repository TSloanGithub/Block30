/* TODO - add your code to create a functional React component that renders a login form */
import React from "react"
import { useState } from "react";

export default function LogInForm({setToken}) {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const result = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: userEmail, password: userPassword})
        });
        const info = await result.json();
        setToken(info.token);
        } catch (error){
            console.error('Error Submitting Login Info');
        }
        setUserEmail("");
        setUserPassword("");
    }




    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
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
                        value={userPassword} 
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