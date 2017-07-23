import React from 'react';

class TodayWeatherItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="weather-item">
        <div className="weather-statistic-text">
          <div className="weather-statistic-temperature">82&deg;</div>
          <div className="weather-statistic-day">Monday 27<sup> th</sup></div>
        </div>
        <div className="weather-statistic-data">
          <i className="fa fa-cloud fa-5x weather-statistic-data-icon" aria-hidden="true"/>
          <div className="weather-statistic-data-text">4mph/ 67&deg;</div>
        </div>
      </div>
    )
  }
}

export default TodayWeatherItem;