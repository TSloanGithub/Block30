/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
//Idea is to have a main page where you can check out books, user profile and a 
import React from 'react'
import {Link} from 'react'

export default function Navbar(){
    return(
        <div id="navbar">
            <Link to="/">home</Link>
        </div>
    )
};