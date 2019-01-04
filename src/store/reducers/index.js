import { combineReducers } from 'redux';

import data from "./data";
import game from "./game";
import players from "./players";

export default combineReducers({
  data,
  game,
  players
});
