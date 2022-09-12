import React, { Component } from 'react';

import SearchIcon from './icons/SearchIcon';

export default class LocationInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.callSubmit = this.callSubmit.bind(this)
        this.state = {location: ''};
    }

    handleChange(e) {
        this.setState({location: e.target.value});
    }

    //Lift data up to ancestor [SearchLocationForm] and clear form input
    callSubmit(e) {
        e.preventDefault();
        if(this.state.location.length !== 0) {
            this.props.handleSubmit(this.state.location)
            this.setState({location: ''})
        }
    }

    render() {
        const location = this.state.location;
        return (
            <form className="search-form" onSubmit={this.callSubmit}>
    
                <input type="text" placeholder="Search Location" value={location} onChange={this.handleChange} />
                <button type="submit" value="Submit"><SearchIcon/></button>
                
            </form>
        )
    }
}
