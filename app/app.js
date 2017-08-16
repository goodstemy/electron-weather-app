import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container';

ReactDOM.render(
  <AppContainer/>,
  document.querySelector('#root')
);

// TODO: implement weather effects
// let engine = new RainyDay({
//   image: document.querySelector('.aside'),
//   parentElement: document.querySelector('.container'),
// });
