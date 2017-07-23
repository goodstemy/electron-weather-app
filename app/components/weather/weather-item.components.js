import React from 'react';

class WeatherItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="weather-item">
        <p className="weather-text-day">TUE</p>
        <i className="fa fa-cloud fa-2x" aria-hidden="true"/>
        <p className="weather-text-temperature">82&deg;</p>
      </div>
    )
  }
}

export default WeatherItem;