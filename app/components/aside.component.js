import React from "react";

class Aside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <aside className="aside">
        <img className="bg-image" src="public/img/background.jpg" alt="fon"/>
      </aside>
    );
  }
}

export default Aside;
