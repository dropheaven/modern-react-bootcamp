import React, { Component } from "react";
import ColorBox from "./ColorBox";

class ColorBoxes extends Component {
   render() {
      const arr = Array.from(Array(this.props.numOfBoxes).keys());
      return (
         <div className="flex flex-wrap max-w-3xl mx-auto mt-6">
            {arr.map(n => (
               <ColorBox key={n} />
            ))}
         </div>
      );
   }
}

export default ColorBoxes;
