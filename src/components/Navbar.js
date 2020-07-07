import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav-wrapper green darken-3'>
            <div className='container nav-wrapper'>
                <a href="/" className="brand-logo"><i className="material-icons">timeline</i>UK COVID-19 Tracker</a>                
                <ul className='right'>
                    <li><a href='/'>Dashboard</a></li>
                    <li><a href='/graphs'>Graphs</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar