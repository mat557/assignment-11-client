import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

// https://stackoverflow.com/questions/72082801/cant-find-the-matching-array-of-object-search-by-id

const SingleServiceDetail = () => {
  const navigate = useNavigate();
  const { idOfService } = useParams();
  const [rest, setRest] = useState({});
  

  useEffect(() => {
    const url = `https://stormy-brook-59939.herokuapp.com/services/${idOfService}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRest(data);
      });
  }, [rest]);

  const handleUpdate = (event) => {
    event.preventDefault();
    
    const updatedValue = event.target.quantity.value;
    const newUpdate = rest.quantity + parseInt(updatedValue);
    console.log(newUpdate);

    const url = `https://stormy-brook-59939.herokuapp.com/services/${idOfService}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newUpdate }),
    })
      .then((res) => res.json())
      .then((product) => {
        // console.log(product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelivered = (num) => {
    const total = rest.quantity;
    const final = total + num;
    const url = `https://stormy-brook-59939.herokuapp.com/services/${idOfService}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: final }),
    })
      .then((res) => res.json())
      .then((product) => {
        // console.log(product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleManage = () => {
    navigate("/inventory");
  };

  return (
    <div className="container">
      <h5 className="text-center">You have Choosed :</h5>

      <div className="w-75 m-auto">
        <Card>
          <Card.Img variant="top" className="mx-auto" style={{height:"155px",width:"155px"}} src={rest?.img} />
          <Card.Body>
            <Card.Title>{rest.name}</Card.Title>
            <Card.Text>{rest.description}</Card.Text>
            <p>
              Price:{rest.price} & Quantity :{rest.quantity}
            </p>
            <p>Provider:{rest.provider}</p>
            <button
              onClick={() => handleDelivered(-1)}
              className="btn-style mx-auto d-block">
              Delivered
            </button>
          </Card.Body>
        </Card>
      </div>
      <button
        onClick={handleManage}
        className="w-50 mx-auto d-block mt-5 style-button"
      >
        Manage Inventory
      </button>
      <div>
        <h3
          style={{ color: "rgba(216, 71, 4, 0.894)" }}
          className="text-center mt-3 mb-3"
        >
          Update Product Quantity
        </h3>
        <form  onSubmit={handleUpdate} >
        <input className="w-100 mb-2" type="text" name="quantity" placeholder="product quantity" required/>
          <br /> 
          <input className="btn-style mx-auto d-block"  type="submit" value="Add Product Quantity"/>
        </form>
      </div>
    </div>
  );
};

export default SingleServiceDetail;
