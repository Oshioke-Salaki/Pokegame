import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const tostring = (num) => num.toString().padStart(3, "0");
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <div className="card-img">
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${tostring(
              this.props.id
            )}.png`}
            alt={this.props.name}
          />
        </div>
        <div className="card-details">
          <h4>Type: {this.props.type}</h4>
          <h4>EXP: {this.props.exp}</h4>
        </div>
      </div>
    );
  }
}

export default Pokecard;
