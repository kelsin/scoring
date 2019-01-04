import React from "react";

import nth from "ramda/es/nth";

import { connect } from "react-redux";

import actions from "./store/actions";

class PlayerName extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.namePlayer(event.target.value);
  }

  render () {
    return (<th colSpan="2">
              <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </th>);
  }
}

const mapStateToProps = (state, ownProps) => {
  let { players } = state;
  let { player } = ownProps;

  let value = nth(player - 1, players);

  return {value};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let { player } = ownProps;

  return {
    namePlayer: name => dispatch(actions.namePlayer(player, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerName);
