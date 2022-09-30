import React, { Component } from 'react'

export default class WeatherIcon extends Component {

    constructor(props) {
        super(props);
        this.weatherIcon = this.weatherIcon.bind(this);
    }

    weatherIcon(main) {
        switch (main){
            case "Thunderstorm":
                return <i className="fa-solid fa-cloud-bolt"></i>;
            case "Clear":
                return <i className="fa-solid fa-sun"></i>;
            case "Drizzle":
                return <i className="fa-solid fa-cloud-drizzle"></i>;
            case "Rain":
                return <i class="fa-solid fa-cloud-showers-heavy"></i>
            case "Snow":
                return <i className="fa-solid fa-snowflake"></i>;
            case "Clouds":
                return <i class="fa-solid fa-cloud"></i>;
            default:
                return <i className="fa-solid fa-sun"></i>;
        }
    }
    
    render() {
        return (
            <div className="weather-icon">
                {this.weatherIcon(this.props.weather.main)}
            </div>
        )
    }
}
