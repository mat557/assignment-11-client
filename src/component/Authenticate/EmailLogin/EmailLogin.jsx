import React from "react";

const EmailLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{height:"1px",backgroundColor:"rgba(216, 71, 4, 0.594)"}} className="w-50 mx-auto"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{height:"1px",backgroundColor:"rgba(216, 71, 4, 0.594)"}} className="w-50 mx-auto"></div>
      </div>
      <button className="w-50 mx-auto d-block btn-style" >Google Login</button>
    </div>
  );
};

export default EmailLogin;
