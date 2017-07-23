import React from 'react';

import Toolbar from '../components/toolbar.component';
import Header from '../components/header.component';
import Weather from "../components/weather.component";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Toolbar/>
        <Header/>
        <Weather/>
      </div>
    )
  }
}

export default AppContainer;