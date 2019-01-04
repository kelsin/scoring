import React from "react";
import map from "ramda/es/map";
import range from "ramda/es/range";
import { connect } from "react-redux";

import { games } from "./data";

import Field from "./Field";
import PlayerName from "./PlayerName";

const Fields = ({ name, players }) => {
  let game = games[name];

  if (!game) {
    return null;
  }

  let playerNames = map(player => (<PlayerName key={`player_${player}`} player={player} />), range(1, players.length + 1));
  let fields = map(field => (<Field key={field.name} field={field} />), game ? game.fields : []);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {playerNames}
        </tr>
      </thead>
      <tbody>
        {fields}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  name: state.game.name,
  players: state.players
});

export default connect(mapStateToProps)(Fields);
