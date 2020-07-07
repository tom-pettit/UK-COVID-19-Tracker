import React from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'

class InfectionsGraph extends React.Component {

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
            var newDatasets = [{label: 'Infections', 
                                data: [],
                                backgroundColor: 'rgb(255, 200, 0)'}]
            for (i = 0; i < previousData.length; i++) {

                newLabels.push(previousData[i].updated_at.slice(0,10))
                newDatasets[0].data.push(previousData[i].new_confirmed)
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
                            position:'right',
                            labels: {
                                fontColor: 'white'
                            }
                   },
                   scales: {
                       yAxes: [{
                           ticks: {
                               fontColor: 'white'
                           }
                       }],
                       xAxes: [{
                           ticks: {
                               fontColor: 'white'
                           }
                       }]
                   }
               }}/>
            </div>
        )
    }
}

export default InfectionsGraph