import React from 'react'

function portfolio() {
    return (
        <div>
            
            <section className='bg-secondary'>
                <div className='container'>
                    <div className='row align-items-start justify-content-start'>
                        <div className='col-6'>
                            <a href='https://github.com/jcnolan9/Project2_FullStackApp'>
                                <img className='img-fluid w-75 mt-5 mb-5 rounded' src="MelodyMedley_Playlists.PNG" alt="">
                                </img>
                            </a>
                    
                        </div>
                        <div className='col-6'>
                            <h2 className='mt-5'>Playlist Creator aka Melody Medley</h2>
                            <p>
                                This playlist creator app allows the user to view the artists and their respective songs in our
                                remote database. The user can also view several ore-made playlists. In orde to create their own 
                                playlist the user needs to sign up or login in with their pre-existing account. After loggin in 
                                or signing up the user has access to the "create playlist" and "add song to playlist" features.
                            </p>
                            <a href='https://project2-full-stack-app.herokuapp.com/'>
                                <p>Link to deployed app</p>
                            </a>
                        </div>
                    </div> 
                </div>
            </section>

            <section className='bg-dark'>
                <div className='container text-light'>
                    <div className='row align-items-start justify-content-start'>
                        <div className='col-6'>
                            <a href='https://github.com/jcnolan9/noteTaker'>
                                <img className='img-fluid w-75 mt-5 mb-5 rounded' src="NoteTaker.PNG" alt="">
                                </img>
                            </a>
                    
                        </div>
                        <div className='col-6'>
                            <h2 className='mt-5'>Note Taker App</h2>
                            <p>
                                This app allows users to take down helpful notes & reminders as well as delete them.
                            </p>
                            <a href='https://shrouded-springs-86699.herokuapp.com/notes'>
                                <p>Link to deployed app</p>
                            </a>
                        </div>
                    </div> 
                </div>
            </section>


            <section className='bg-secondary'>
                <div className='container'>
                    <div className='row align-items-start justify-content-start'>
                        <div className='col-6'>
                            <a href='https://github.com/jcnolan9/ecommerceBackend'>
                                <img className='img-fluid w-75 mt-5 mb-5 rounded' src="Ecommerce.PNG" alt="">
                                </img>
                            </a>
                    
                        </div>
                        <div className='col-6'>
                            <h2 className='mt-5'>E-Commerce Backend</h2>
                            <p>
                                This E-Commerce backend uses the Sequalize ORM to create our database and model the relationships between products, 
                                catergories, and product tags. CRUD operations are available via api routes for updating and viewing the 
                                contents of the database
                            </p>
                            <a href="https://watch.screencastify.com/v/4E7Wb1CVxgejmCEWjVFZ">
                                <p>Part 1: Video Walkthrough</p>
                                </a>
                            <a href="https://watch.screencastify.com/v/hcGr2KXlQ1ruv0CQbntq">
                                <p>Part 2: Video Walkthrough</p>
                            </a>
                        </div>
                    </div> 
                </div>
            </section>

            <section className='bg-dark'>
                <div className='container text-light'>
                    <div className='row align-items-start justify-content-start'>
                        <div className='col-6'>
                            <a href='https://github.com/jcnolan9/weatherDashboard'>
                                <img className='img-fluid w-75 mt-5 mb-5 rounded' src="weather.PNG" alt="">
                                </img>
                            </a>
                    
                        </div>
                        <div className='col-6'>
                            <h2 className='mt-5'>Weather Dashboard</h2>
                            <p>
                                This Weather Dashboard lets you input the name of any city and see the current
                                weather as well as a 5 day forecast for days ahead. The cities you search get saved
                                so that you can check the weather again with the click of a button. This app uses a public
                                REST API  to retrieve and display the weather results.
                            </p>
                            <a href='https://jcnolan9.github.io/weatherDashboard/'>
                                <p>Link to deployed app</p>
                            </a>
                        </div>
                    </div> 
                </div>
            </section>

            <section className='bg-secondary'>
                <div className='container'>
                    <div className='row align-items-start justify-content-start'>
                        <div className='col-6'>
                            <a href='https://github.com/jcnolan9/workDayPlanner'>
                                <img className='img-fluid w-75 mt-5 mb-5 rounded' src="workDay.PNG" alt="">
                                </img>
                            </a>
                    
                        </div>
                        <div className='col-6'>
                            <h2 className='mt-5'>Workday Planner</h2>
                            <p>
                                Plan out your meetings, tasks, breaks, etc using this single-day planner. Add and update items throughout the day.
                                Upcoming  items show up in green, current items show up in red, past items show up in grey.
                            </p>
                            <a href="https://jcnolan9.github.io/workDayPlanner/">
                                <p>Link to deployed page</p>
                            </a>
                        </div>
                    </div> 
                </div>
            </section>

            <section className='bg-dark'>
                <div className='container text-light'>
                    <div className='row align-items-start justify-content-start'>
                        <div className='col-6'>
                            <a href='https://github.com/jcnolan9/codeQuiz'>
                                <img className='img-fluid w-75 mt-5 mb-5 rounded' src="quiz1.PNG" alt="">
                                </img>
                            </a>
                    
                        </div>
                        <div className='col-6'>
                            <h2 className='mt-5'>Code Quiz</h2>
                            <p>
                                How much do you know about coding? Take this fun quiz and try to get the high score! This fun quiz game
                                uses a countdown timer in a race for the user to answer as many questions as they can before time runs out.
                                Incorrect answers result in time getting substracted from the clock. Input your score on the leaderboard at 
                                the end of the round.
                            </p>
                            <a href='https://jcnolan9.github.io/codeQuiz/'>
                                <p>Link to deployed app</p>
                            </a>
                        </div>
                    </div> 
                </div>
            </section>


        </div>
    )
}

export default portfolio

