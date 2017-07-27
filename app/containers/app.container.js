import React from 'react';

import Toolbar from '../components/toolbar.component';
import Article from '../components/article.component';
import Aside from '../components/aside.component';
import ModalWindow from '../components/modal.component';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingModal: false,
      modalClass: "modal-closed",
    };
  }

  componentDidMount = () => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.setState({
          isShowingModal: false,
          modalClass: "modal-closed",
        });
      }
    })
  }

  turnModal = () => {
    console.log(this.state.isShowingModal);

    if (!this.state.isShowingModal) {
      this.setState({modalClass: "modal-opened"});
      this.setState({isShowingModal: true});
    } else {
      this.setState({modalClass: "modal-closed"});
      this.setState({isShowingModal: false});
    }
  };

  handleOutside = (e) => {
    if (e.target.className === "modal-opened modal") {
      this.turnModal(false);
    }
  };

  helpers = () => {
    return {
      handleOutside: this.handleOutside,
      turnModal: this.turnModal,
    }
  };

  render() {
    return(
      <div>
        <ModalWindow helpers={this.helpers} className={this.state.modalClass}/>
        <Toolbar/>
        <Article helpers={this.helpers}/>
        <Aside/>
      </div>
    )
  }
}

export default AppContainer;