import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Link } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import { insertRegistration } from "../helper/axiosHelper";
import { toast } from "react-toastify";

const initialObject = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [userRegistrationInfo, setUserRegistrationInfo] =
    useState(initialObject);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserRegistrationInfo({ ...userRegistrationInfo, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...userInfo } = userRegistrationInfo;
    const { status, message } = await insertRegistration(userInfo);
    toast[status](message);
    setUserRegistrationInfo(initialObject);
  };
  return (
    <MainLayout>
      <div>
        <div className="login-page d-flex justify-content-center mt-5">
          <div className="login-form border p-4 shadow-lg bg-light mt-5">
            <h3>Register Now</h3>
            <hr />
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter email"
                  name="firstName"
                  onChange={handleOnChange}
                  value={userRegistrationInfo.firstName}
                  //   so that it will make the form empty because when we press submit it will reset the form
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter email"
                  name="lastName"
                  onChange={handleOnChange}
                  value={userRegistrationInfo.lastName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleOnChange}
                  value={userRegistrationInfo.email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleOnChange}
                  value={userRegistrationInfo.password}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="confirmPassword"
                  onChange={handleOnChange}
                  value={userRegistrationInfo.confirmPassword}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <div className="text-end">
              Already register here? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
