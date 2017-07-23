import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <header className="header">
        <img src="public/img/background.jpg" alt="background" className="header-background-img"/>
        <div className="header-search">
          <input type="text" className="header-input-search"/>
        </div>
        <div className="header-location">
          <div className="header-location-icon"/>
          <div className="header-location-city">FLORIDA, USA</div>
          <div className="header-location-time">20:15 pm</div>
        </div>
      </header>
    )
  }
}

export default Header;