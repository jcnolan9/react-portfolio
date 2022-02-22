import React, { useState } from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function Project() {
    const [currentPage, setCurrentPage] = useState('About Me')

    const renderPage = () => {
        if(currentPage === 'About Me') {
            return <About />
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if(currentPage === 'Resume') {
            return <Resume />
        }
        if(currentPage === 'Contact Me') {
            return <Contact />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {renderPage()}
            </div>
            <Footer />
        </div>    
    )
}

export default Project