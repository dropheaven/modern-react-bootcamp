import React, { Component } from "react";

class PokeCard extends Component {
  render() {
    const { id, name, type, base_experience: xp } = this.props.pokemon;

    function padNum(id) {
      let num = id.toString();

      if (num.length === 1) {
        return `00${num}`;
      } else if (num.length === 2) {
        return `0${num}`;
      } else {
        return num;
      }
    }

    return (
      <div className="w-56 m-3 flex flex-col items-center bg-gray-100 border-1 rounded shadow-2xl">
        <div className=" m-2 bg-gray-300 rounded">
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padNum(
              id
            )}.png`}
            alt={name}
          />
        </div>
        <h1 className="text-blue-700 font-bold mb-3">{name}</h1>
        <p className="mb-1 text-sm font-semibold text-gray-700">Type: {type}</p>
        <p className="mb-3 text-sm font-semibold text-gray-700">EXP: {xp}</p>
      </div>
    );
  }
}

export default PokeCard;
