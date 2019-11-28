import React, { Component } from "react";
import Pokedex from "./Pokedex";

class PokeGame extends Component {
   static defaultProps = {
      pokemons: [
         { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
         { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
         { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
         { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
         { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
         { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
         { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
         { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
      ]
   };

   generateTwoRandomHands = () => {
      const firstHand = [...this.props.pokemons];
      const secondHand = [];

      while (firstHand.length > 4) {
         const randomIndex = Math.floor(Math.random() * firstHand.length - 1);
         const pokemon = firstHand.splice(randomIndex, 1);
         secondHand.push(pokemon[0]);
      }

      return [firstHand, secondHand];
   };

   totalXP = pokedex => {
      return pokedex.reduce((amount, p) => amount + p.base_experience, 0);
   };

   winner = (firstHand, secondHand) => {
      console.log(firstHand, secondHand);
      return firstHand > secondHand ? firstHand : secondHand;
   };

   render() {
      const pokemons = this.generateTwoRandomHands();
      const firstHandTotalXP = this.totalXP(pokemons[0]);
      const secondHandTotalXP = this.totalXP(pokemons[1]);
      const winningTotal = this.winner(firstHandTotalXP, secondHandTotalXP);

      return (
         <div>
            <Pokedex
               pokemons={pokemons[0]}
               totalXP={firstHandTotalXP}
               isWinner={winningTotal === firstHandTotalXP}
            />
            <Pokedex
               pokemons={pokemons[1]}
               totalXP={secondHandTotalXP}
               isWinner={winningTotal === secondHandTotalXP}
            />
         </div>
      );
   }
}

export default PokeGame;
