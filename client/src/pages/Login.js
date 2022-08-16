import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import { checkLoginDetials } from "../helper/axiosHelper";
import { toast } from "react-toastify";

//   Uncontrolled field data means I don't have the power what's typing
// we use uncontrolled filed when we have few fields and we don't care about the field, we only care what we get after the submit
const Login = () => {
  const refEmail = useRef();
  const refPassword = useRef();
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = refEmail.current.value;
    const password = refPassword.current.value;
    const { status, message, response } = await checkLoginDetials({
      email,
      password,
    });
    toast[status](message);
    if (status === "success") {
      window.localStorage.setItem("user", JSON.stringify(response));
      navigate("/dashboard");
    }
  };

  return (
    <MainLayout>
      <div className="main mt-5">
        <div className="fuck">
          <h3>Welcome Back</h3>
          <hr />
          <Form onSubmit={handleOnSubmit} className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name="userName"
                ref={refEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                ref={refPassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div className="text-end">
            New here? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
