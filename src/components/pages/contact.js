import React from 'react'

function contact() {

    return (
        <form>
            <label for='name'>Name:</label>
            <input type='text' id='name' required></input><br></br>
            
            <label for='email'>Email:</label>
            <input type='email' id='email' required></input><br></br>

            <label for='message'>Send Me A Message</label><br></br>
            <textarea id='message' required></textarea><br></br>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default contact