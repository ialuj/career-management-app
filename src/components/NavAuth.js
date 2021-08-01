import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as VscIcons from "react-icons/vsc";
import { useHistory } from "react-router-dom";

const NavAuth = (props) => {
  console.log(props.isLoggedIn);

  const history = useHistory();

  const logout = () => {
    history.push({
      pathname: "/",
      state: { loggedUser: null, isLoggedIn: true },
    });
  };

  return !props.isLoggedIn ? (
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
            <Nav.Link href="/logout" onClick={() => logout()}>
              <Container>
                <Row>
                  <Col>
                    <BiIcons.BiLogOutCircle />
                  </Col>
                  <Col>Logout</Col>
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
  ) : (
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
                    <BiIcons.BiLogIn />
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
  );
};

export default NavAuth;
