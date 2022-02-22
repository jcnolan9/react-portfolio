import React from 'react'

function contact() {

    return (
        <form>
            <label for='name'>Name:</label>
            <input type='text' id='name' required></input>
            
            <label for='email'>Email:</label>
            <input type='email' id='email' required></input>

            <label for='message'>Send Me A Message</label>
            <textarea id='message' required></textarea>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default contact