import React, { Component } from 'react'
import LocationInput from './LocationInput'

export default class SearchLocationForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(location) {

        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${this.props.appid}`
        )
        .then(res => res.json())
        .then(resp => this.props.coordinates(resp[0].lat, resp[0].lon))
        .catch((error) => {
            console.error("there has been an issue with the GeoCode API Call", error)
        })

    }

    render() {
        return (
            <LocationInput className="searchLocationForm" handleSubmit={this.handleSubmit}/>
        )
    }
}
