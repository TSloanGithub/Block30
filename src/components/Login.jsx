/* TODO - add your code to create a functional React component that renders a login form */
import React from "react"

export default function LogInForm() {


        return(
            <>
            <div>
                <form>
                    <label>Email:</label>
                    <input type="email" placeholder="Email Login"></input>
                    <label>Password:</label>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">Submit</button>
                    </form>
            </div>
            </>

    )
}