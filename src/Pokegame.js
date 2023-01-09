import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  render() {
    let hand1 = [];
    let hand2 = [];
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

    let totalH1 = hand1.reduce((acc, cur) => acc + cur.base_experience, 0);
    let totalH2 = hand2.reduce((acc, cur) => acc + cur.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={hand1} total={totalH1} iswinner={totalH1 > totalH2} />
        <Pokedex pokemon={hand2} total={totalH2} iswinner={totalH2 > totalH1} />
      </div>
    );
  }
}

export default Pokegame;
