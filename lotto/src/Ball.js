import React, { Component } from "react";

class Ball extends Component {
   render() {
      return (
         <span className="inline-flex justify-center items-center border rounded-full bg-orange-600 text-white font-semibold w-12 h-12 inline-block mx-1">
            {this.props.num}
         </span>
      );
   }
}

export default Ball;
