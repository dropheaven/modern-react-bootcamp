import React, { Component } from "react";

class Coin extends Component {
   render() {
      return (
         <img src={this.props.face} alt="half dollar coin" className="w-32" />
      );
   }
}

export default Coin;
