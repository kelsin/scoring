import update from "ramda/es/update";
import games from "../../data/games";

import append from "ramda/es/append";
import assoc from "ramda/es/assoc";
import dropLast from "ramda/es/dropLast";
import map from "ramda/es/map";
import reduce from "ramda/es/reduce";

const data = (state = {}, action) => {
  switch(action.type) {
  case "NEW_GAME":
    let game = games[action.game.name];
    if(game) {
      return reduce((result, field) => assoc(field.name,
                                            new Array(action.game.players),
                                            result),
                    {},
                    game.fields);
    } else {
      return state;
    }
  case "ADD_PLAYER":
    return map(append(null), state);
  case "REMOVE_PLAYER":
    return map(dropLast(1), state);
  case "DATA":
    return {
      ...state,
      [action.data.field]: update(action.data.player - 1,
                                  action.data.value,
                                  state[action.data.field])
    };
  default:
    return state;
  }
};

export default data;
