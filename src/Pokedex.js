import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    const styleWinner = {
      color: "green"
    };

    const styleLoser = {
      color: "red"
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >
        {this.props.iswinner ? (
          <h1 style={styleWinner}>winner with a score of {this.props.total}</h1>
        ) : (
          <h1 style={styleLoser}>Loser with a score of {this.props.total}</h1>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px"
          }}
        >
          {this.props.pokemons.map((cur) => (
            <Pokecard
              name={cur.name}
              id={cur.id}
              type={cur.type}
              exp={cur.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
