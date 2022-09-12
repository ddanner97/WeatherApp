import React, { Component } from 'react'

export default class WeatherIcon extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="weather-icon">
                <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`}></img>
            </div>
        )
    }
}
