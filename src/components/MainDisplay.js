import React, { Component } from 'react'

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
            icon: '',
            temp: '',
            feelLike: '',
            humidity: ''
        }
        
    }

    //So this is what is causing the infinite loop
    componentDidMount() {

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coordinates[0]}&lon=${this.props.coordinates[1]}&units=imperial&appid=${this.props.appid}`
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
                `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coordinates[0]}&lon=${this.props.coordinates[1]}&units=imperial&appid=${this.props.appid}`
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
    }

    render() {
        return (
            <div className="main-display-container">
                <h2 className="main-display-name">
                    {this.state.name}
                </h2>


            </div>
        )
    }
}
