import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    const styleWinner = {
      color: "#4caf50",
      marginTop: "10px",
      marginBottom: "10px",
    };

    const styleLoser = {
      color: "#e91e63",
      marginTop: "10px",
      marginBottom: "10px",
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        {this.props.iswinner ? (
          <h1 style={styleWinner}>winning Hand</h1>
        ) : (
          <h1 style={styleLoser}>Losing Hand</h1>
        )}
        <h4 style={{ marginBottom: "25px", marginTop: "0" }}>
          Total Experience: {this.props.total}
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.props.pokemon.map((p) => (
            <Pokecard
              name={p.name}
              id={p.id}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
