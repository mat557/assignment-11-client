import React from "react";
import { Card } from "react-bootstrap";
import auth from "../../../Firebase.init";
import "./Additional.css";
import { useAuthState } from "react-firebase-hooks/auth";

const Additional = () => {
  const [user] = useAuthState(auth);
  const userUrl = user?.photoURL;
  return (
    <div>
        <h4 style={{color:"rgba(216, 71, 4, 0.894)"}} className="text-center" >We Are Keeping Those Information Of Yours</h4>
        <p className="text-center">Login to check</p>
      <Card className="w-50 mx-auto text-center">
        <Card.Img className="d-flex align-items-center mx-auto" style={{height:"55px",width:"55px"}} src={userUrl} />
        <Card.Body>
          <Card.Title>{user?.displayName}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Additional;
