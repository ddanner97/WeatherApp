import React, { Component } from 'react'
import WeatherIcon from './icons/WeatherIcon'
import WeatherInfo from './WeatherInfo'
import '../static/MainDisplay/mainDisplay.css'

export default class MainDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            lat: '',
            lon: '',
            name: '',
            weather: '',
            main: '',
            desc: '',
            icon: '',
            temp: '',
            feelLike: '',
            humidity: ''
        }
        
    }

    componentDidMount() {

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coordinates[0]}&lon=${this.props.coordinates[1]}&units=imperial&appid=${process.env.REACT_APP_APPID}`
        )
        .then(res => res.json())
        .then(resp => {
            this.setState({
                isLoaded: true,
                data: resp,
                lat: resp.coord.lat,
                lon: resp.coord.lon,
                name: resp.name,
                weather: resp.weather[0],
                icon: resp.weather[0].icon,
                temp: resp.main.temp,
                feelLike: resp.main.feels_like,
                humidity: resp.main.humidity
            });
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
                `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coordinates[0]}&lon=${this.props.coordinates[1]}&units=imperial&appid=${process.env.REACT_APP_APPID}`
            )
            .then(res => res.json())
            .then(resp => {
                this.setState({
                    isLoaded: true,
                    data: resp,
                    lat: resp.coord.lat,
                    lon: resp.coord.lon,
                    name: resp.name,
                    weather: resp.weather[0],
                    icon: resp.weather[0].icon,
                    temp: resp.main.temp,
                    feelLike: resp.main.feels_like,
                    humidity: resp.main.humidity
                });
            })
            .catch((error) => {
                console.error("there has been an issue with the GeoCode API Call", error)
                this.setState({
                    isLoaded: true,
                    error: true
                })
            })
        }
    }

    render() {
        return (
            <div className="main-display">
                {/* Ternary operator: If loading == false render loading, If error == render error, else render page */}
                { !this.state.isLoaded ? <div>Loading</div>
                    : this.state.error ? <div>Error</div>
                        :
                        <div className="main-display-container">
                            <h2 className="main-display-name">
                                {this.state.name}
                            </h2>
                            <WeatherIcon weather={this.state.weather} />
                            <WeatherInfo temp={this.state.temp} feelsLike={this.state.feelLike} humidity={this.state.humidity} />
                        </div>
                }
            </div>
        )
    }
}
