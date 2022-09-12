import React from 'react'
import SearchLocationForm from './components/SearchLocationForm'
import MainDisplay from './components/MainDisplay';
import Forecast from './components/Forecast';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        appid: "97c4d1fc6cbaa6a2d05424af07566123",
        coordinates: [39.100105, -94.5781416],
    }
  }

  render() {
      return (
        <div className='weather-app'>
          <SearchLocationForm coordinates={(lat, lon) => this.setState({...this.state, coordinates: [lat, lon]})} appid={this.state.appid} />
          <MainDisplay coordinates={this.state.coordinates} appid={this.state.appid} />
          <Forecast coordinates={this.state.coordinates} appid={this.state.appid} />
        </div>
      )
  }
}

export default App;
