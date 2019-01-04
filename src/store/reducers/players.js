import append from "ramda/es/append";
import dropLast from "ramda/es/dropLast";
import map from "ramda/es/map";
import range from "ramda/es/range";
import update from "ramda/es/update";

const players = (state = [], action) => {
  switch(action.type) {
  case "NEW_GAME":
    return map(i => `Player ${i}`,
               range(1, 1 + action.game.players));
  case "ADD_PLAYER":
    return append(`Player ${state.length + 1}`, state);
  case "REMOVE_PLAYER":
    return dropLast(1, state);
  case "NAME_PLAYER":
    return update(action.data.player - 1, action.data.name, state);
  default:
    return state;
  }
};

export default players;
