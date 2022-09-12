import React, { Component } from 'react'
import ForecastCard from './ForecastCard'

export default class Forecast extends Component {

    constructor(props) {
        super(props)
        this.state = {
            days: []
        }
    }

    componentDidMount() {

        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.coordinates[0]}&lon=${this.props.coordinates[1]}&units=imperial&appid=${this.props.appid}`
        )
        .then(res => res.json())
        .then(response => {
            this.setState({
                // Filter out misc timestamp data to get only next 5 days forecast at "15:00:00"
                days: response.list.filter(day => {
                    return day.dt_txt.endsWith("15:00:00");
                })
            })
        })
        .catch((error) => {
            console.error("there has been an issue with the GeoCode API Call", error)
            this.setState({
                isLoaded: true,
                error
            })
        })

    }

    render() {
        return (
            <div className='forecast-display-container'>
                {/* Render Days */}
                {this.state.days.map((day, index) =>
                    <ForecastCard data={day} key={index}/>
                )}
            </div>
        )
    }
}
