import React from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let styles;

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekDay: 0,
      months: 0,
      day: 0,
    };

    setInterval(() => this.tick(), 1000 * 60);
  }

  refreshDate = () => {
    let date = new Date();

    this.setState({
      weekDay: date.getDay(),
      months: date.getMonth(),
      day: date.getDate(),
    });

    console.log(this.state);
  };

  tick = () => {
    console.log("refreshed!");
    this.refreshDate();
  };

  componentDidMount() {
    this.tick();
  }

  render() {
    styles = {
      backgroundImage: `url(${this.props.iconPath})`,
    };

    return (
      <article className="article">
        <div className="article-wrap">
          <div className="article-date">
            <div className="search-button" style={styles} onClick={this.props.helpers().turnModal}/>
              <p className="article-date-day">{this.state.day} {weekDays[this.state.weekDay]}</p>
            <br/>
              <p className="article-date-month">{months[this.state.months]}</p>
          </div>
          <div className="article-data">
            {this.props.weatherData ? (
              <p className="article-data-temperature">{this.props.weatherData.item.condition.temp}&deg;</p>
            ) : (
              <p className="article-data-temperature">∞ &deg;</p>
            )}
            <img src="public/img/cloud.svg" alt="icon" className="article-data-icon" />
          </div>
          {this.props.weatherData ? (
            <div className="article-weather">
              {this.props.weatherData.item.forecast.map((item) =>
                <div className="article-weather-item">
                  <p className="article-weather-item-day">{item.day}</p>
                  <img src="public/img/rain.svg" alt="icon" className="article-weather-item-icon" />
                  <p className="article-weather-item-temperature">{(parseInt(item.low) + parseInt(item.high)) / 2}&deg;</p>
                </div>
              )}
            </div>
          ) : (
            <div className="article-weather">
              <div className="article-weather-item">
                <p className="article-weather-item-day">MON</p>
                <img src="public/img/rain.svg" alt="icon" className="article-weather-item-icon" />
                <p className="article-weather-item-temperature">∞ &deg;</p>
              </div>
              <div className="article-weather-item">
                <p className="article-weather-item-day">TUE</p>
                <img src="public/img/sky.svg" alt="icon" className="article-weather-item-icon" />
                <p className="article-weather-item-temperature">∞ &deg;</p>
              </div>
              <div className="article-weather-item">
                <p className="article-weather-item-day">WED</p>
                <img src="public/img/sun-1.svg" alt="icon" className="article-weather-item-icon" />
                <p className="article-weather-item-temperature">∞ &deg;</p>
              </div>
              <div className="article-weather-item">
                <p className="article-weather-item-day">THU</p>
                <img src="public/img/sun-1.svg" alt="icon" className="article-weather-item-icon" />
                <p className="article-weather-item-temperature">∞ &deg;</p>
              </div>
              <div className="article-weather-item">
                <p className="article-weather-item-day">FRI</p>
                <img src="public/img/rain.svg" alt="icon" className="article-weather-item-icon" />
                <p className="article-weather-item-temperature">∞ &deg;</p>
              </div>
              <div className="article-weather-item">
                <p className="article-weather-item-day">SAT</p>
                <img src="public/img/sky.svg" alt="icon" className="article-weather-item-icon" />
                <p className="article-weather-item-temperature">∞ &deg;</p>
              </div>
              <div className="article-weather-item">
                <p className="article-weather-item-day">SUN</p>
                <img src="public/img/cloud.svg" alt="icon" className="article-weather-item-icon" />
                <p className="article-weather-item-temperature">∞ &deg;</p>
              </div>
            </div>
          )}
        </div>
      </article>
    );
  }
}

export default Article;
