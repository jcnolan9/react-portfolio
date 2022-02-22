import React, {useState} from 'react';
import '../index'

function Header({currentPage, handlePageChange}) {
    return (

        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            <div class='container'>
                <a href="#" class='navbar-brand'>Jordan Nolan</a>
            </div>
            <button class='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#navLinks'>
                <span class='navbar-toggler-icon'></span>
            </button>
            <div id='navLinks' class='collapse navbar-collapse'>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a className='nav-link' href="#About Me"
                            onClick={
                                () => handlePageChange('About Me')
                            }
                            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                            className={
                                currentPage === 'Home' ? 'nav-link active' : 'nav-link'
                        }>
                            About Me
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className='nav-link' href="#Portfolio"
                            onClick={
                                () => handlePageChange('Portfolio')
                            }
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={
                                currentPage === 'About' ? 'nav-link active' : 'nav-link'
                        }>
                            Portfolio
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className='nav-link' href="#Resume"
                            onClick={
                                () => handlePageChange('Resume')
                            }
                            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={
                                currentPage === 'Blog' ? 'nav-link active' : 'nav-link'
                        }>
                            Resume
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a className='nav-link' href="#Contact Me"
                            onClick={
                                () => handlePageChange('Contact Me')
                            }
                            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={
                                currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                        }>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
