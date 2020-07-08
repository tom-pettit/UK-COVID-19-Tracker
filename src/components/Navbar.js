import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="nav-extended">
                <div class="nav-wrapper" style={{backgroundColor: '#27fb6b'}}>
                    <a href="/" class="brand-logo">UK COVID-19 Tracker</a>
                    <a href="/dropdownmenu"  class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href='/' style={{color: '#002855'}}>Dashboard</a></li>
                        <li><a href='/graphs' style={{color: '#002855'}}>Graphs</a></li>
                        <li><a href='/about' style={{color: '#002855'}}>About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

