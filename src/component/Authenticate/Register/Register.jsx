import React from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import EmailLogin from "../EmailLogin/EmailLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});


    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate('/home');
    }

    let errorMessage;
    if(error){
        errorMessage = <p className="text-danger text-center">Error: {error?.message}</p>
    }



    const handleRegister =(event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        createUserWithEmailAndPassword(email,pass);
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
      {errorMessage}
      <EmailLogin></EmailLogin>
    </div>
  );
};

export default Register;
