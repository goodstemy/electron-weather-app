import React from 'react';

import Toolbar from '../components/toolbar.component';
import Article from '../components/article.component';
import Aside from '../components/aside.component';
import ModalWindow from '../components/modal.component';

const SEARCH_ICON_PATH = "public/img/search.svg";
const CLOSE_SEARCH_PATH = "public/img/close_search_icon.svg";

let searchIcon;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingModal: false,
      modalClass: "modal-closed",
      searchIconPath: SEARCH_ICON_PATH,
    };
  }

  componentDidMount = () => {
    // searchIcon = document.querySelector(".search-button");
    // searchIcon.style.backgroundImage = `url(${this.state.searchIconPath}`;

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.setState({
          isShowingModal: false,
          modalClass: "modal-closed",
          searchIconPath: SEARCH_ICON_PATH,
        });
      }
    })
  }

  turnModal = () => {
    if (!this.state.isShowingModal) {
      this.state.searchIconPath;
      this.setState({
        modalClass: "modal-opened",
        isShowingModal: true,
        searchIconPath: CLOSE_SEARCH_PATH,
      });
    } else {
      this.setState({
        modalClass: "modal-closed",
        isShowingModal: false,
        searchIconPath: SEARCH_ICON_PATH,
      });
    }
  };

  helpers = () => {
    return {
      turnModal: this.turnModal,
    }
  };

  render() {
    return(
      <div className="container">
        <ModalWindow className={this.state.modalClass}/>
        <Toolbar/>
        <Article iconPath={this.state.searchIconPath} helpers={this.helpers}/>
        <Aside/>
      </div>
    )
  }
}

export default AppContainer;
