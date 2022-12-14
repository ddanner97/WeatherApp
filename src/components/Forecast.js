import React, { Component } from 'react'
import ForecastCard from './ForecastCard'
import '../static/Forecast/forecast.css'

export default class Forecast extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            days: []
        }
    }

    componentDidMount() {

        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.coordinates[0]}&lon=${this.props.coordinates[1]}&units=imperial&appid=${process.env.REACT_APP_APPID}`
        )
        .then(res => res.json())
        .then(response => {
            this.setState({
                isLoaded: true,
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

    componentDidUpdate(prevProp) {

        //Call API when props change
        if (prevProp.coordinates[0] !== this.props.coordinates[0]) {

            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.coordinates[0]}&lon=${this.props.coordinates[1]}&units=imperial&appid=${process.env.REACT_APP_APPID}`
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
    }

    render() {
        return (
            <div className="forecast">
                {/* Ternary operator: If loading == false render loading, If error == render error, else render page */}
                { !this.state.isLoaded ? <div>Loading</div>
                    : this.state.error ? <div>Error</div>
                        :
                        <div className="forecast-display-container">
                            {/* Render Days */}
                            {this.state.days.map((day, index) =>
                                <ForecastCard data={day} key={index}/>
                            )}
                        </div>
                }
            </div>
        )
    }
}
