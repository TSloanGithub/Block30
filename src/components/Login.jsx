/* TODO - add your code to create a functional React component that renders a login form */
import React from "react"

function LogInForm() {
    return(
        <>
        <div>
            <label>Email:</label>
            <input type="email" placeholder="Email Login"></input>
            <label>Password:</label>
            <input type="password" placeholder="Password"></input>
            <button type="submit">Submit</button>
        </div>
        </>

    )
}

export default LogInForm;
LogInForm();