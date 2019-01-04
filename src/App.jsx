import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Scoring">
          <Switch>
            <Route path="/:game" component={Game} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
