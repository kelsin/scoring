import React from "react";
import { connect } from "react-redux";

import { games } from "./data";
import actions from "./store/actions";
import NotFound from "./NotFound";
import Fields from "./Fields";

class Game extends React.Component {
  componentDidMount() {
    let { match, newGame } = this.props;
    let game = games[match.params.game];

    if (game) {
      newGame(game.name, game.players.min);
    }
  }

  componentDidUpdate(prevProps) {
    let { match, name, newGame } = this.props;

    if (match.params.game !== name) {
      let game = games[match.params.game];

      if (game) {
        newGame(game.name, game.players.min);
      }
    }
  }

  render() {
    let { match } = this.props;
    let game = games[match.params.game];

    if (game) {
      return (
        <React.Fragment>
          <h1>
            <a href={`https://www.boardgamegeek.com/boardgame/${game.bgg}`}>{game.title}</a>
          </h1>
          <h2>by {game.designer}</h2>
          <Fields/>
        </React.Fragment>
      );
    } else {
      return (<NotFound/>);
    }
  }
}

const mapStateToProps = state => ({
  name: state.game.name
});

const mapDispatchToProps = dispatch => ({
  newGame: (name, players) => dispatch(actions.newGame(name, players))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
