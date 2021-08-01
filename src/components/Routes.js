import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "./Home";
import Career from "./Career";
import Careers from "./Careers";
import Professionals from "./Professionals";
import Login from "./Login";
import About from "./About";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/career" component={Career} />
          <Route path="/careers" component={Careers} />
          <Route path="/professinals" component={Professionals} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
