import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    data: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [];
    let totalH1 = 0;
    let totalH2 = 0;
    this.props.data.forEach((el) => {
      if (hand1.length !== 4 && hand2.length !== 4) {
        let hand = Math.random() <= 0.5 ? 1 : 2;
        hand === 1 ? hand1.push(el) : hand2.push(el);
      } else if (hand1.length < 4) {
        hand1.push(el);
      } else {
        hand2.push(el);
      }
    });

    hand1.forEach((el) => {
      totalH1 += el.base_experience;
    });
    hand2.forEach((el) => {
      totalH2 += el.base_experience;
    });

    return (
      <div>
        <h1 style={{ color: "#1600ff" }}>Pokegame!</h1>
        <Pokedex
          pokemons={hand1}
          total={totalH1}
          iswinner={totalH1 > totalH2 ? true : false}
        />
        <Pokedex
          pokemons={hand2}
          total={totalH2}
          iswinner={totalH1 > totalH2 ? false : true}
        />
      </div>
    );
  }
}

export default Pokegame;
