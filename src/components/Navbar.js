import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav-wrapper' style={{backgroundColor: '#27fb6b'}}>
            <div className='container nav-wrapper'>
                <a href="/" className="brand-logo" style={{color: '#002855'}}><i className="material-icons">timeline</i>UK COVID-19 Tracker</a>                
                <ul className='right'>
                    <li><a href='/' style={{color: '#002855'}}>Dashboard</a></li>
                    <li><a href='/graphs' style={{color: '#002855'}}>Graphs</a></li>
                    <li><a href='/about' style={{color: '#002855'}}>About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar