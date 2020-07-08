import React from 'react'

const DropdownMenu = () => {
    return (
        <div>
            <div className='container'>
                <div class="card blue-grey darken-1">
                    <div class="card-content" style={{backgroundColor: '#27fb6b'}}>
                        <a href="/" style={{fontWeight: "bold", color: '#002855'}} class="card-title">Dashboard</a>
                        <p style={{fontWeight: "bold", color: '#002855'}}>The home page of the site. Shows data for today, as well as other overall stats</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div class="card blue-grey darken-1">
                    <div class="card-content" style={{backgroundColor: '#27fb6b'}}>
                        <a href="/graphs" style={{fontWeight: "bold", color: '#002855'}} class="card-title">Graphs</a>
                        <p style={{fontWeight: "bold", color: '#002855'}}>The page showing the graphs for deaths and infections for the UK over time</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div class="card blue-grey darken-1">
                    <div class="card-content" style={{backgroundColor: '#27fb6b'}}>
                        <a href="/about" style={{fontWeight: "bold", color: '#002855'}} class="card-title">About</a>
                        <p style={{fontWeight: "bold", color: '#002855'}}>The page showing the details about how the site is made</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu