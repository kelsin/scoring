import React from "react";
import map from "ramda/es/map";
import range from "ramda/es/range";

import { connect } from "react-redux";

import Player from "./Player";
import { titleize } from "./util";

const Field = ({ field, data, players }) => {
  let { color, name, label } = field;

  if (!label) {
    label = titleize(name);
  }

  if (!color) {
    color = "#000";
  }

  let className = `type-${field.type || "normal"}`;
  let numPlayers = players.length;

  let dataCells = map(index => (<Player key={`field_${name}_player_${index}`}
                                       name={name}
                                       player={index} />),
                      range(1, numPlayers + 1));

  return (
    <tr className={className}>
      <th style={{color}}>{label}</th>
      {dataCells}
    </tr>
  );
};

const mapStateToProps = (state, ownProps) => ({
  players: state.players,
  name: state.game.name,
  data: state.data
});

export default connect(mapStateToProps)(Field);
