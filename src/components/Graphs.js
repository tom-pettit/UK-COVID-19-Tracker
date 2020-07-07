import React from 'react'
import InfectionsGraph from './InfectionsGraph'
import DeathsGraph from './DeathsGraph'


const Dashboard = () => {
    return (
        <div>
            <div className="card yellow darken-1">
                    <div className="card-content black-text">
                        <span className="card-title">COVID19 Graphs</span>
                        <p>These graphs show the infections and deaths from COVID19 so far</p>
                    </div>
            </div>
            <InfectionsGraph />
            <DeathsGraph />
        </div>
    )
}

export default Dashboard