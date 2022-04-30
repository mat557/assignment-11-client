import React from "react";
import './Login.css';
import {  Form } from "react-bootstrap";
import { Link} from "react-router-dom";

const Login = () => {
    
    // const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;

        console.log(email,pass)
    }

    // const visiteWithNevigate = (event) =>{
    //     navigate('/register');
    // }


  return (
    <div className="mx-auto w-50">
      <h1 className="text-center style mt-3">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button className="btn-style mx-auto d-block"  type="submit">
          Login
        </button>
      </Form>
      <p className="text-center">New Here? <Link to='/register' className="pe-auto text-decoration-none" style={{color:"rgba(216, 71, 4, 0.894)"}}>Please Register</Link></p>
    </div>
  );
};

export default Login;
