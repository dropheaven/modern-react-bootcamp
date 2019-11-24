import React, { Component } from "react";
import PokeCard from "./PokeCard";

class Pokedex extends Component {
  render() {
    return (
      <div>
        <h2
          className={`text-center font-bold mt-2 text-2xl ${
            this.props.isWinner ? "text-green-500" : "text-red-500"
          }`}
        >
          {this.props.isWinner ? "Winning Hand" : "Losing Hand"}
        </h2>
        <h3 className="text-center my-2">
          Total Experience: {this.props.totalXP}
        </h3>
        <div className="flex justify-center flex-wrap">
          {this.props.pokemons.map((pokemon, i) => (
            <PokeCard key={i} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
