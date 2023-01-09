import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
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
