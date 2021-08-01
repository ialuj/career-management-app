import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as VscIcons from "react-icons/vsc";
import "./Header.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Home";
import Career from "./Career";
import Careers from "./Careers";
import Professionals from "./Professionals";
import Login from "./Login";
import About from "./About";
import NavAuth from "./NavAuth";

const Header = (props) => {
  const isUserLoggedIn = () => {
    if (props.location) {
      return props.location.state.loggedUser.isLoggedIn ? true : false;
    }
    return false;
  };

  return (
    <>
      <Router>
        <NavAuth isLoggedIn={isUserLoggedIn} />
        <Switch>
          <Route path="/" exact component={Careers} />
          <Route path="/home" component={Career} />
          <Route path="/careers" component={Careers} />
          <Route path="/professionals" component={Professionals} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
};

export default Header;
