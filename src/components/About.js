import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <h1>About</h1>
            <h5>This website provides the most up-to-date information about the coronavirus situatation in the UK.</h5>
            <p>Information about how this website works can be found below:</p>
            <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title large">The Data</span>
                        <p>The data for this service is provided through the Covid-19 REST API. The link to this API can be found <a className='black-text' href={'https://about-corona.net/documentation'}>here</a></p>
                    </div>
            </div>
        </div>
    )
}

export default About