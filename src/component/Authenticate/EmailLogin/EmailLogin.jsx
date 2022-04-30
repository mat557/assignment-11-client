import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";

const EmailLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorMessage;
  if (error) {
        errorMessage = <p className="text-danger text-center">Error: {error?.message}</p>
  }

  if(user){
    navigate('/home')
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "rgba(216, 71, 4, 0.594)" }}
          className="w-50 mx-auto"
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "1px", backgroundColor: "rgba(216, 71, 4, 0.594)" }}
          className="w-50 mx-auto"
        ></div>
      </div>
      {errorMessage}
      <button onClick={() => signInWithGoogle()} className="w-50 mx-auto d-block btn-style">Google Login</button>
    </div>
  );
};

export default EmailLogin;
