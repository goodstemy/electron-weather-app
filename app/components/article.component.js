import React from "react";

let styles;

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    styles = {
      backgroundImage: `url(${this.props.iconPath})`,
    }

    return (
      <article className="article">
        <div className="article-wrap">
          <div className="article-date">
            <div className="search-button" style={styles} onClick={this.props.helpers().turnModal}/>
            <p className="article-date-day">sun 12</p>
            <br/>
            <p className="article-date-month">october</p>
          </div>
          <div className="article-data">
            <p className="article-data-temperature">23&deg;</p>
            <img src="public/img/cloud.svg" alt="icon" className="article-data-icon" />
          </div>
          <div className="article-weather">
            <div className="article-weather-item">
              <p className="article-weater-item-day">MON</p>
              <img src="public/img/rain.svg" alt="icon" className="article-weater-item-icon" />
              <p className="article-weater-item-temperature">32&deg;</p>
            </div>
            <div className="article-weather-item">
              <p className="article-weater-item-day">MON</p>
              <img src="public/img/sky.svg" alt="icon" className="article-weater-item-icon" />
              <p className="article-weater-item-temperature">32&deg;</p>
            </div>
            <div className="article-weather-item">
              <p className="article-weater-item-day">MON</p>
              <img src="public/img/sun-1.svg" alt="icon" className="article-weater-item-icon" />
              <p className="article-weater-item-temperature">32&deg;</p>
            </div>
            <div className="article-weather-item">
              <p className="article-weater-item-day">MON</p>
              <img src="public/img/sun-1.svg" alt="icon" className="article-weater-item-icon" />
              <p className="article-weater-item-temperature">32&deg;</p>
            </div>
            <div className="article-weather-item">
              <p className="article-weater-item-day">MON</p>
              <img src="public/img/rain.svg" alt="icon" className="article-weater-item-icon" />
              <p className="article-weater-item-temperature">32&deg;</p>
            </div>
            <div className="article-weather-item">
              <p className="article-weater-item-day">MON</p>
              <img src="public/img/sky.svg" alt="icon" className="article-weater-item-icon" />
              <p className="article-weater-item-temperature">32&deg;</p>
            </div>
            <div className="article-weather-item">
              <p className="article-weater-item-day">MON</p>
              <img src="public/img/cloud.svg" alt="icon" className="article-weater-item-icon" />
              <p className="article-weater-item-temperature">32&deg;</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
