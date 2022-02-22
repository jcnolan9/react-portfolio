import React from 'react'
import React, { useState } from 'react';

function Header() {
    const [currentPage, setCurrentPage] = useState('About Me')

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#About Me"
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
            <li className="nav-item">
                <a href="#Portfolio"
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
            <li className="nav-item">
                <a href="#Resume"
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
            <li className="nav-item">
                <a href="#Contact Me"
                    onClick={
                        () => handlePageChange('Contact')
                    }
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                        currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                }>
                    Contact Me
                </a>
            </li>
        </ul>
    )
}

export default Header
