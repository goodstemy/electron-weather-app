import React from "react";
import WeatherItem from "./weather-item.component.js";

let styles;

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: (new Date).getDate(),
      weekDay: (new Date).getDay(),
      month: (new Date).getMonth(),
    };
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
            <p className="article-date-day">{weekDays[this.state.weekDay]} {this.state.date}</p>
            <br/>
            <p className="article-date-month">{monthNames[this.state.month]}</p>
          </div>
          <div className={"article-data " + (this.props.weatherData ? "" : "no-data")}>
              <p className="article-data-temperature">
                {
                  this.props.weatherData ?
                  this.props.weatherData.query.results.channel.item.condition.temp :
                  "--"
                }
                &deg;
              </p>
              {
                this.props.weatherData ?
                  <img src={`public/img/weather-icons/${this.props.weatherData.query.results.channel.item.condition.text.toLowerCase().split(" ").join("_")}.png`} alt="icon" className="article-data-icon" /> :
                  <img src="public/img/cloud.png" alt="icon" className="article-data-icon" />
              }
          </div>
          <div className={"article-weather " + (this.props.weatherData ? "" : "no-data")}>
            {this.props.weatherData ?
              <div>
                {this.props.weatherData.query.results.channel.item.forecast.map(item =>
                  <WeatherItem itemData={item}/>
                )}
              </div>
            :
              <div>
                <WeatherItem/>
                <WeatherItem/>
                <WeatherItem/>
                <WeatherItem/>
                <WeatherItem/>
                <WeatherItem/>
                <WeatherItem/>
                <WeatherItem/>
              </div>
            }
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
