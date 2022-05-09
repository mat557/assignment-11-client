import React, {  useRef } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import EmailLogin from "../Authenticate/EmailLogin/EmailLogin";
import Loading from "../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(''); 
  const passRef = useRef(''); 
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  

  if(loading || sending){
    return <Loading></Loading>
}

  let errorMessage;
  if (error) {
    errorMessage = (
      <p className="text-danger text-center">Error: {error?.message}</p>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const email = event.target.email.value;
    // const pass = event.target.password.value;

    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };

  const passwordReset = async() =>{
    const email = emailRef.current.value;
    // const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast("Email Sent");
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
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={passRef}
            placeholder="Password"
            required
          />
        </Form.Group>

        <button className="btn-style mx-auto d-block" type="submit">
          Login
        </button>
      </Form>
      <p className="text-center">
        New Here?
        <Link
          to="/register"
          className="pe-auto text-decoration-none"
          style={{ color: "rgba(216, 71, 4, 0.894)" }}
        >
          Please Register
        </Link>
      </p>
      <p className="w-50 mx-auto d-block">
        Forget Password?
        <button onClick={passwordReset} className="btn btn-link text-success pe-auto text-decoration-none">
          Reset Password
        </button>
      </p>
      {errorMessage}
      <EmailLogin></EmailLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
