import React from 'react';

import {ipcRenderer} from 'electron';
import electron, {remote} from 'electron';

const win = remote.getCurrentWindow();

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  buttonClose() {
    win.close();
  }

  buttonExpand() {
    !win.isMaximized() ? win.maximize() : win.unmaximize();
  }

  buttonTurn() {
    win.minimize();
  }

  render() {
    return(
      <div className="toolbar">
        <div className="buttons">
          <div className="button-close" onClick={this.buttonClose}/>
          <div className="button-expand" onClick={this.buttonExpand}/>
          <div className="button-turn" onClick={this.buttonTurn}/>
        </div>
        <section className="drag-area"/>
      </div>
    )
  }
}

export default Toolbar;

