import React, { Component } from "react";

class ColorBox extends Component {
   static defaultProps = {
      colors: [
         "bg-gray-600",
         "bg-red-600",
         "bg-orange-600",
         "bg-yellow-600",
         "bg-green-600",
         "bg-teal-600",
         "bg-blue-600",
         "bg-indigo-600",
         "bg-purple-600",
         "bg-pink-600",
         "bg-black",
         "bg-white"
      ]
   };

   constructor(props) {
      super(props);
      const randomIndex = Math.floor(Math.random() * props.colors.length);
      const color = props.colors[randomIndex];
      this.state = {
         bgColor: color
      };

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      const randomIndex = Math.floor(Math.random() * this.props.colors.length);
      const color = this.props.colors[randomIndex];

      this.setState({ bgColor: color });
   }

   render() {
      return (
         <div
            onClick={this.handleClick}
            className={`w-1/6 h-20 ${this.state.bgColor} cursor-pointer`}
         />
      );
   }
}

export default ColorBox;
