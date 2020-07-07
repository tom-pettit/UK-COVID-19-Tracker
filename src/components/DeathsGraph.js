import React from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'

class DeathsGraph extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: [],
                datasets: []
            }
        }

        axios.get('https://corona-api.com/countries/GB')
        .then(res => {
            const previousData = res.data.data.timeline
            console.log(previousData)
            var i;
            var newLabels = [];
            var newDatasets = [{label: 'Deaths', 
                                data: [],
                                backgroundColor: 'rgb(247, 17, 17)'}]
            for (i = 0; i < previousData.length; i++) {
                if (previousData[i].new_deaths > 3000) {
                    console.log('anomaly')
                } else {
                    newLabels.push(previousData[i].updated_at.slice(0,10))
                    newDatasets[0].data.push(previousData[i].new_deaths)
                }
            }
            newLabels = newLabels.reverse()
            newDatasets[0].data.reverse()
            this.setState({
                chartData: {
                    labels: newLabels,
                    datasets: newDatasets
                }
            })
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className='chart'>
               <Bar data={this.state.chartData} options={{
                   legend: {display:true,
                            position:'right'
                   }
               }}/>
            </div>
        )
    }
}

export default DeathsGraph