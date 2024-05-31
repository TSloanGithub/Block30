/* TODO - add your code to create a functional React component that renders a login form */
import React from "react"

export default function LogInForm() {
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
                    <input type="email" name="userEmail" placeholder="Email Login"/>
                    <label>Password:</label>
                    <input type="password" name="userPassword" placeholder="Password"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>

    )
}