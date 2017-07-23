import React from 'react';

import WeatherItem from './weather/weather-item.components';
import TodayWeatherItem from './weather/today-weather-item.components';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItems = () => [...new Array(6)].map((el, i) => {return <WeatherItem key={i}/>});

  render() {
    return (
      <div className="weather">
        <TodayWeatherItem/>
        {this.renderItems()}
      </div>
    )
  }
}

export default Weather;