import React from "react";

class WeatherItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.itemData ?
          <div className="article-weather-item">
            {console.log(this.props.itemData)}
            <p className="article-weater-item-day">{this.props.itemData.day}</p>
            <img src={`public/img/weather-icons/${this.props.itemData.text.toLowerCase().split(" ").join("_")}.png`} alt="icon" className="article-weater-item-icon" />
            <p className="article-weater-item-temperature">{(parseInt(this.props.itemData.high) + parseInt(this.props.itemData.low)) / 2}&deg;</p>
          </div>
          :
          <div className="article-weather-item">
            <p className="article-weater-item-day">Mon</p>
            <img src="public/img/rain.svg" alt="icon" className="article-weater-item-icon" />
            <p className="article-weater-item-temperature">33&deg;</p>
          </div>
        }
      </div>
    );
  }
}

export default WeatherItem;
