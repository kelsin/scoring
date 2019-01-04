const game = (state = {}, action) => {
  switch(action.type) {
  case "NEW_GAME":
    return action.game;
  default:
    return state;
  }
};

export default game;
