import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as VscIcons from "react-icons/vsc";
import "./Header.css";

const HeaderProfile = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
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
            <Nav className="me-auto">
              <Nav.Link href="#friends">
                <Container>
                  <Row>
                    <Col>
                      <FaIcons.FaUserFriends />
                    </Col>
                    <Col>Friends</Col>
                  </Row>
                </Container>
              </Nav.Link>
              <Nav.Link href="#professionals">
                <Container>
                  <Row>
                    <Col>
                      <FaIcons.FaUserFriends />
                    </Col>
                    <Col>Professionals</Col>
                  </Row>
                </Container>
              </Nav.Link>
              <Nav.Link href="#careers">
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
              <Nav.Link href="#account">
                <Container>
                  <Row>
                    <Col>
                      <VscIcons.VscAccount />
                    </Col>
                    <Col>Account</Col>
                  </Row>
                </Container>
              </Nav.Link>
              <Nav.Link href="#logout">
                <Container>
                  <Row>
                    <Col>
                      <FiIcons.FiLogOut />
                    </Col>
                    <Col>Logout</Col>
                  </Row>
                </Container>
              </Nav.Link>
              <Nav.Link href="#about">
                <Container>
                  <Row>
                    <Col>
                      <FcIcons.FcAbout />
                    </Col>
                    <Col>About</Col>
                  </Row>
                </Container>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderProfile;
