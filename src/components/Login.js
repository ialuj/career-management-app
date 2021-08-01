import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import * as BiIcons from "react-icons/bi";
import * as FcIcons from "react-icons/fc";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";

import Users from "../data/Users";

import "./App.css";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserInput = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const signIn = (username, password) => {
    if (
      username === "" ||
      password === "" ||
      username === "username" ||
      password === "password"
    ) {
      setLoginError(`Fill username and password!`);
      return;
    }
    setLoginError("");

    const user = Users.filter(
      (user) => username === user.username && password === user.password
    );

    console.log(user);

    if (user.length === 1) {
      setLoginError(
        user[0].username + " voce logou com a senha: " + user[0].password + "!"
      );
      return;
    }
    setLoginError("Utilizador ou Senha Invalidos!");
  };

  const clearFields = () => {
    setLoginError("");
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="Login">
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup">
                {loginError}
              </Form.Label>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <BiIcons.BiUserCircle />
                </InputGroup.Text>
                <FormControl
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    handleUserInput(e);
                  }}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <RiIcons.RiLockPasswordLine />
                </InputGroup.Text>
                <FormControl
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    handleUserInput(e);
                  }}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Remember me"
              />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs="16">
              <ButtonGroup>
                <Button
                  className="mb-2"
                  onClick={() => {
                    signIn(username, password);
                  }}
                >
                  Sign In
                </Button>
              </ButtonGroup>
              <Form.Label className="mb-2">{"   "}</Form.Label>
              <ButtonGroup>
                <Button
                  className="mb-2"
                  onClick={() => {
                    clearFields();
                  }}
                >
                  <GrIcons.GrClearOption />
                  {`      Clear`}
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs="16">
              <Form.Label>Or</Form.Label>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs="16">
              <ButtonGroup>
                <Button className="mb-2">
                  <FcIcons.FcGoogle />
                  {`      Sign In with Google`}
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Login;
