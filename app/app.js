import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container';

ReactDOM.render(
  <AppContainer/>,
  document.querySelector('#root')
);

// TODO: implement weather effects later
// let engine = new RainyDay({
//   image: document.querySelector('.bg-image'),
//   parentElement: document.querySelector('.aside'),
//   crop: [50, 0, 50, 60],
//   blur: 10,
//   opacity: 1,
// });
//
// engine.rain(
//   [
//     [1, 0, 20],         // add 20 drops of size 1...
//     [3, 3, 1]           // ... and 1 drop of size from 3 - 6 ...
//   ], 100);
//
// setTimeout(() => {
//   let canvas = document.querySelector("canvas");
//   canvas.style.left = "500px";
//   canvas.style.zIndex = "9999";
// }, 1000);