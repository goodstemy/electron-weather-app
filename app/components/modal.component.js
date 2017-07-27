import React from 'react';

class ModalWindow extends React.Component {
  constructor(params) {
    super(params);

    this.state = {};
  }

  render() {
    return (
      <div onClick={e => {this.props.helpers().handleOutside(e)}} className={this.props.className + " modal"}>
        <input type="text"/>
      </div>
    )
  }
}

export default ModalWindow;