import React, { Component } from 'react'
import WeatherIcon from './icons/WeatherIcon'

export default class ForecastCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <li className='forecast-day-card'>
                <h5>{Math.round(this.props.data.main.temp_max)}°</h5>
                <WeatherIcon weather={this.props.data.weather[0]} />
                <h5>{Math.round(this.props.data.main.temp_min)}°</h5>
            </li>
        )
    }
}
