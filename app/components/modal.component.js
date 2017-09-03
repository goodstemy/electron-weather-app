import React from 'react';
import {ipcRenderer} from 'electron';
import {Notification} from 'electron';

class ModalWindow extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      searchValue: ''
    };

    ipcRenderer.on('city-data', (event, arg) => {
      this.props.helpers().setWeatherData(arg);
    });
  }

  handleSubmit = (event) => {
    if (!!this.state.searchValue) {
      ipcRenderer.send('city-name', this.state.searchValue);
    } else {
      // TODO: Error border or message?
    }

    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  };

  render() {
    return (
      <div className={this.props.className + " modal"}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchValue} placeholder="Type your city" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default ModalWindow;
