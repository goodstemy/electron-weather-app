import React from 'react';

class ModalWindow extends React.Component {
  constructor(params) {
    super(params);

    this.state = {};
  }

  render() {
    return (
      <div className={this.props.className + " modal"}>
        <input type="text" placeholder="Type your city"/>
      </div>
    )
  }
}

export default ModalWindow;
