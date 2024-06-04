import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* TODO - add your code to create a functional React component that renders a registration form */
export default function RegisterNewUser({setToken}){
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    async function newUserSubmit(event){
        event.preventDefault();
            try{
                const result = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: userEmail, password: userPassword, firstname: firstName, lastname: lastName})
            });
            const info = await result.json();
            console.log(info);
            setToken(info.token);
            } catch (error){
                console.error('Error Submitting Login Info');
                console.log(error);
            }
    }

    return(
        <div>
        <form method="post" onSubmit={newUserSubmit}>
            <label>First Name:</label>
            <input 
                type="text" 
                name="userFirstName"
                value={firstName} 
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}
                placeholder="First Name">
            </input>
            <label>Last Name:</label>
            <input 
                type="text" 
                name="userLastName"
                value={lastName} 
                onChange={(e)=>{
                    setLastName(e.target.value)
                }}
                placeholder="Last Name">
            </input>
            <label>Email:</label>
            <input 
                type="email" 
                name="userEmail" 
                value={userEmail}
                onChange={(e)=>{
                    setUserEmail(e.target.value);
                }} 
                placeholder="Email Login" /><br/>
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
    )}