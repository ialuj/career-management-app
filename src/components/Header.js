import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import "./Header.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Home";
import Career from "./Career";
import Careers from "./Careers";
import Professionals from "./Professionals";
import Login from "./Login";
import About from "./About";

const Header = () => {
  return (
    <>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">
              <Container>
                <Row>
                  <Col>
                    <FcIcons.FcHome />
                  </Col>
                  <Col>Career</Col>
                </Row>
              </Container>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" activeKey="/home">
                <Nav.Link href="/professionals">
                  <Container>
                    <Row>
                      <Col>
                        <FaIcons.FaUserFriends />
                      </Col>
                      <Col>Professionals</Col>
                    </Row>
                  </Container>
                </Nav.Link>
                <Nav.Link href="/careers">
                  <Container>
                    <Row>
                      <Col>
                        <FcIcons.FcGraduationCap />
                      </Col>
                      <Col>Careers</Col>
                    </Row>
                  </Container>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/login">
                  <Container>
                    <Row>
                      <Col>
                        <FiIcons.FiLogIn />
                      </Col>
                      <Col>Login</Col>
                    </Row>
                  </Container>
                </Nav.Link>
                <Nav.Link href="/about">
                  <Container>
                    <Row>
                      <Col>
                        <FcIcons.FcAbout />
                      </Col>
                      <Col>About</Col>
                    </Row>
                  </Container>
                </Nav.Link>
                <Nav.Link href="/facebook">
                  <Container>
                    <Row>
                      <Col>
                        <FaIcons.FaFacebook />
                      </Col>
                    </Row>
                  </Container>
                </Nav.Link>
                <Nav.Link href="/instagram">
                  <Container>
                    <Row>
                      <Col>
                        <FiIcons.FiInstagram />
                      </Col>
                    </Row>
                  </Container>
                </Nav.Link>
                <Nav.Link href="/linkedin">
                  <Container>
                    <Row>
                      <Col>
                        <FaIcons.FaLinkedin />
                      </Col>
                    </Row>
                  </Container>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
