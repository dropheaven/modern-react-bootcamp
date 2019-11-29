import React, { Component } from "react";
import Ball from "./Ball";
import "./Lotto.css";

class Lotto extends Component {
   static defaultProps = {
      title: "Lotto",
      balls: 6,
      maxNum: 40
   };

   constructor(props) {
      super(props);
      this.state = {
         randomBalls: Array.from({ length: this.props.balls })
      };

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      this.setState({
         randomBalls: this.state.randomBalls.map(
            n => Math.floor(Math.random() * this.props.maxNum) + 1
         )
      });
   }

   render() {
      return (
         <div className="container">
            <div className="flex flex-col justify-center items-center px-4 border border-gray-900 rounded-lg">
               <h1 className="text-2xl font-bold mt-6">{this.props.title}</h1>
               <div className="my-6">
                  {this.state.randomBalls.map((n, i) => (
                     <Ball key={i} num={n} />
                  ))}
               </div>
               <button
                  onClick={this.handleClick}
                  className="bg-blue-800 text-white py-2 px-4 border rounded-full mb-6 hover:bg-blue-900"
               >
                  Generate
               </button>
            </div>
         </div>
      );
   }
}

export default Lotto;
