import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
   static defaultProps = {
      sides: ["one", "two", "three", "four", "five", "six"]
   };

   constructor(props) {
      super(props);

      this.state = {
         dieOne: "one",
         dieTwo: "one",
         rolling: false
      };

      this.roll = this.roll.bind(this);
   }

   roll() {
      const randomSide = this.props.sides[Math.floor(Math.random() * 6)];
      const randomSideTwo = this.props.sides[Math.floor(Math.random() * 6)];

      this.setState({
         dieOne: randomSide,
         dieTwo: randomSideTwo,
         rolling: true
      });

      setTimeout(() => this.setState({ rolling: false }), 1000);
   }

   render() {
      return (
         <div className="mt-20">
            <div className="flex justify-center">
               <Die
                  classes="mx-10"
                  face={this.state.dieOne}
                  rolling={this.state.rolling}
               />
               <Die
                  classes="mx-10"
                  face={this.state.dieTwo}
                  rolling={this.state.rolling}
               />
            </div>
            <div className="flex justify-center my-16">
               <button
                  className="bg-gray-900 px-16 py-6 border rounded-lg text-white text-xl hover:bg-red-700"
                  onClick={this.roll}
                  disabled={this.state.rolling}
               >
                  {this.state.rolling ? "Rolling..." : "Roll Dice"}
               </button>
            </div>
         </div>
      );
   }
}

export default RollDice;
