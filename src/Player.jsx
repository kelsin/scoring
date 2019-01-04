import React from "react";

import find from "ramda/es/find";
import map from "ramda/es/map";
import nth from "ramda/es/nth";
import propEq from "ramda/es/propEq";
import sum from "ramda/es/sum";

import { connect } from "react-redux";
import { games } from "./data";

import actions from "./store/actions";

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  getData(name, def = '') {
    let { player, data } = this.props;
    return nth(player - 1,
               data[name] || []) || def;
  }

  getValue(name, def = '') {
    let { game } = this.props;
    let field = find(propEq('name', name))(game.fields);
    let { type } = field;

    switch(type) {
    case "sum":
      return sum(map(name => this.getValue(name, 0),
                     field.fields));
    case "function":
      return field.func(this.getData(name, def));
    default:
      return this.getData(name, def);
    }
  }

  handleChange(event) {
    let value = '';
    if(event.target.value.length > 0) {
      value = parseInt(event.target.value, 10) || 0;
    }
    this.props.addData(value);
  }

  render() {
    let { game, name } = this.props;
    let field = find(propEq('name', name))(game.fields);
    let { type } = field;

    if(type === "function") {
      return (<React.Fragment>
                <td>
                  <input type="number"
                         value={this.getData(name)}
                         onChange={this.handleChange}/>
                </td>
                <td>
                  { this.getValue(name) }
                </td>
              </React.Fragment>);

    } else {
      return (<td colSpan="2">
                <input type="number"
                       value={this.getValue(name)}
                       onChange={this.handleChange}/>
              </td>);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data,
    game: games[state.game.name]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let { name, player } = ownProps;

  return {
    addData: value => dispatch(actions.data(player, name, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
