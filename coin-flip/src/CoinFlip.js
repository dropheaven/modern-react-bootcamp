import React, { Component } from "react";
import Coin from "./Coin";
import head from "./images/head.png";
import tail from "./images/tail.jpg";

class CoinFlip extends Component {
   constructor(props) {
      super(props);
      this.state = {
         flips: 0,
         heads: 0,
         tails: 0,
         isHeads: false
      };

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      const random = Math.floor(Math.random() * 2);

      this.setState(curSt => ({
         flips: curSt.flips + 1
      }));

      if (random === 0) {
         this.setState(curSt => ({
            heads: curSt.heads + 1,
            isHeads: true
         }));
      } else {
         this.setState(curSt => ({
            tails: curSt.tails + 1,
            isHeads: false
         }));
      }
   }

   render() {
      const { flips, heads, tails, isHeads } = this.state;
      return (
         <div className="flex flex-col items-center mt-10">
            <h1 className="text-xl mb-6">Lets's Flip a Coin!</h1>
            {flips !== 0 && <Coin face={isHeads ? head : tail} />}
            <button
               className="bg-green-600 px-4 py-2 rounded my-3"
               onClick={this.handleClick}
            >
               FLIP ME
            </button>
            <p>
               Out of {flips} flips, there have been {heads} heads and {tails}{" "}
               tails.
            </p>
         </div>
      );
   }
}

export default CoinFlip;
