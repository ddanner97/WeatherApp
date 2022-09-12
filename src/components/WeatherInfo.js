import React, { Component } from 'react'

export default class WeatherInfo extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className='main-display-weather-info'>
                <h3>{Math.round(this.props.temp)}</h3>
                <h4>Feels Like: {Math.round(this.props.feelsLike)}</h4>
                <h4>Humidity: {this.props.humidity}%</h4>
            </div>
        )
    }
}
