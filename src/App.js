import React from 'react'
import SearchLocationForm from './components/SearchLocationForm'
import MainDisplay from './components/MainDisplay';
import Forecast from './components/Forecast';
import './static/AppScreen/appScreen.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        coordinates: [39.100105, -94.5781416],
    }
  }

  render() {
      return (
        <div className='weather-app'>
          <SearchLocationForm coordinates={(lat, lon) => this.setState({...this.state, coordinates: [lat, lon]})} />
          <MainDisplay coordinates={this.state.coordinates} />
          <Forecast coordinates={this.state.coordinates} />
          <footer>@Damian Danner 2022</footer>
        </div>
      )
  }
}

export default App;
