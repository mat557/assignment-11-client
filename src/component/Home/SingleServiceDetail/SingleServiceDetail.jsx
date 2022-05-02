import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useCustom from "../../../hook/useCustom";

// https://stackoverflow.com/questions/72082801/cant-find-the-matching-array-of-object-search-by-id

const SingleServiceDetail = () => {
  const { idOfService } = useParams();
  const [data] = useCustom();
  const singleItem = data?.find((element) => element._id === +idOfService);
  let result;
  const handleDelivered = ()=>{
    
    console.log(result)
  }
  return (
    <div className="w-75 mx-auto">
      <h5 className="text-center" >You have Choosed :</h5>
      {singleItem ? (
        <div className="w-50 mx-auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={singleItem.img} />
            <Card.Body>
              <Card.Title>{singleItem.name}</Card.Title>
              <Card.Text>
                {singleItem.description}
              </Card.Text>
              <p>Price:{singleItem.price} & Quantity :{singleItem.quantity}</p>
              <p>Provider:{singleItem.provider}</p>
              <button onClick={() => handleDelivered} className="btn-style mx-auto d-block">Delivered</button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleServiceDetail;
