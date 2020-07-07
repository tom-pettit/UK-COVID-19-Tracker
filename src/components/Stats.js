import React from 'react'
import axios from 'axios'

class Stats extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        axios.get('https://corona-api.com/countries/GB')
        .then(res => {
            console.log(res.data)
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        
        const dataObject = this.state.data ? (
            <div>
                <h4>Today's Data</h4>
                <div className="card red darken-1">
                    <div className="card-content black-text">
                        <span className="card-title">{this.state.data.data.today.deaths}</span>
                        <p>This is the number of <span style={{fontWeight: "bold"}}>deaths today</span> in the UK from coronavirus</p>
                    </div>
                </div>
                <div className="card purple darken-1">
                    <div className="card-content black-text">
                        <span className="card-title">{this.state.data.data.today.confirmed}</span>
                        <p>This is the number of <span style={{fontWeight: "bold"}}>infections today</span> in the UK from coronavirus</p>
                    </div>
                </div>

                <br></br>

                <h4>Overall Stats</h4>
                <div className="card red darken-1">
                    <div className="card-content black-text">
                        <span className="card-title">{this.state.data.data.latest_data.deaths}</span>
                        <p>This is the total number of <span style={{fontWeight: "bold"}}>deaths</span> in the UK from coronavirus</p>
                    </div>
                </div>
                <div className="card purple darken-1">
                    <div className="card-content black-text">
                        <span className="card-title">{this.state.data.data.latest_data.confirmed}</span>
                        <p>This is the total number of <span style={{fontWeight: "bold"}}>infections</span> in the UK from coronavirus</p>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <p>There is no data available</p>
            </div>
        )

        return(
            <div className='container'>
                <h2>Dashboard</h2>
                <p>(note: values of 0 indicate the data for today has not yet been posted)</p>
                <div>{dataObject}</div>
            </div>
        )
    }
}

export default Stats