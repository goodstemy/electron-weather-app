import React from 'react';

import Toolbar from '../components/toolbar.component';
import Article from '../components/article.component';
import Aside from '../components/aside.component';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Toolbar/>
        <Article/>
        <Aside/>
      </div>
    )
  }
}

export default AppContainer;