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
         "bg-gray-500",
         "bg-red-500",
         "bg-orange-500",
         "bg-yellow-500",
         "bg-green-500",
         "bg-teal-500",
         "bg-blue-500",
         "bg-indigo-500",
         "bg-purple-500",
         "bg-pink-500",
         "bg-gray-400",
         "bg-red-400",
         "bg-orange-400",
         "bg-yellow-400",
         "bg-green-400",
         "bg-teal-400",
         "bg-blue-400",
         "bg-indigo-400",
         "bg-purple-400",
         "bg-pink-400",
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
      const colors = [...this.props.colors];
      colors.splice(colors.indexOf(this.state.bgColor), 1);
      const randomIndex = Math.floor(Math.random() * colors.length);
      const color = colors[randomIndex];

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
