import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister =(event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;

        console.log(email,pass)
    }
  return (
    <div className="mx-auto w-50">
      <h1 className="text-center style mt-3">Please Register</h1>
      <Form onSubmit={handleRegister} > 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email" 
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button className="btn-style mx-auto d-block" type="submit">
          Register
        </button>
      </Form>
      <p className="text-center">
        Already have an account?
        <Link
          to="/login"
          className="pe-auto text-decoration-none"
          style={{ color: "rgba(216, 71, 4, 0.894)" }}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
