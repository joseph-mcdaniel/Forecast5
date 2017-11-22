import React, { Component  } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    let temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 1.8 - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="pink" units="°F" /></td>
        <td><Chart data={pressures} color="grey" units="hPa" /></td>
        <td><Chart data={humidities} color="#443F43" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <th>City</th>
          <th>Temperature (°F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // { weather } === { weather: weather }
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
