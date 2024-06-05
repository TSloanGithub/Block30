/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
//Idea is to have a main page where you can check out books, user profile and a 
import React from 'react'
import { Link } from 'react-router-dom'
import LogInForm from './Login'
import AccountDetails from './Account'

export default function Navbar({token, setToken}){
    return(
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="register">Register Here!</Link>
            {token ? (<>
            <Link to="account">Account</Link>
            </>
        ) : (<>
            <LogInForm setToken={setToken}/>
            </>
        )}
        </div>
    )
}