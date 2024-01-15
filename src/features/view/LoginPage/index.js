import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../assets/style/LoginPage.css";
import Stack from "react-bootstrap/Stack";
import facebook from "../../assets/images/facebook.svg";
import googleIcon from "../../assets/images/google.svg";
import likedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import LoginImg from "../../assets/images/login.png";
import validation from "./validation";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [validationTrigger, setValidationTrigger] = useState(false);
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (validationTrigger) setErrors(validation(loginCredential));
  }, [loginCredential, validationTrigger]);
  const handleSubmit = () => {
    setValidationTrigger(true);
    let validationError = validation(loginCredential);
    setErrors(validationError);
    if (!errors) {
      navigate("/home");
    }
  };
  const handleEmailChange = (e) => {
    setLoginCredential({
      ...loginCredential,
      email: e.target.value,
    });
  };
  const handlepasswordChange = (e) => {
    setLoginCredential({
      ...loginCredential,
      password: e.target.value,
    });
  };
  return (
    <Container className="container">
      <Row className="justify-content-md-center" style={{ padding: 10 }}>
        <Col xs lg="4">
          <h1>Sign In</h1>
          <p>
            New user? <a href="">Create an account</a>
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Username or email"
                value={loginCredential.email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            {errors.email && (
              <span className="login-error-span ">{errors.email}</span>
            )}
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control
                type="email"
                placeholder="Password"
                value={loginCredential.password}
                onChange={handlepasswordChange}
              />
            </Form.Group>
            {errors.password && (
              <span className="login-error-span ">{errors.password}</span>
            )}
            <Form.Check
              type="checkbox"
              id="custom-switch"
              label="Keep me signed in"
            />
          </Form>
          <Button onClick={handleSubmit} className="btn" variant="dark">
            Sign In
          </Button>{" "}
          <p className="label">Or Sign In With</p>
          <Stack direction="horizontal" gap={4} style={{ marginLeft: 50 }}>
            <div className="p-2">
              <img src={googleIcon} style={{ width: 20 }} alt="" />
            </div>
            <div className="p-2">
              {" "}
              <img src={facebook} style={{ width: 20 }} alt="" />
            </div>
            <div className="p-2">
              {" "}
              <img src={likedin} style={{ width: 20 }} alt="" />
            </div>
            <div className="p-2">
              {" "}
              <img src={twitter} style={{ width: 20 }} alt="" />
            </div>
          </Stack>
        </Col>
        <Col md lg="2"></Col>
        <Col xs lg="4">
          <Row>
            <img src={LoginImg} alt="" className="img" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
