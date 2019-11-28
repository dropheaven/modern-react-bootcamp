import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
   render() {
      const { face, classes, rolling } = this.props;
      return (
         <i
            className={`fas fa-dice-${face} fa-9x text-red-600 ${classes} ${rolling &&
               "rolling"}`}
         ></i>
      );
   }
}

export default Die;
