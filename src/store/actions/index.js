const newGame = (name, players) => ({
  type: "NEW_GAME",
  game: {
    name,
    players
  }
});

const addPlayer = () => ({type: "ADD_PLAYER"});
const removePlayer = () => ({type: "REMOVE_PLAYER"});
const namePlayer = (player, name) => ({
  type: "NAME_PLAYER",
  data: {
    player,
    name
  }
});

const data = (player, field, value) => ({
  type: "DATA",
  data: {
    field,
    player,
    value
  }
});

export { newGame, addPlayer, removePlayer, namePlayer, data };
export default { newGame, addPlayer, removePlayer, namePlayer, data };
