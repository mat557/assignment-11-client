import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

// https://stackoverflow.com/questions/72082801/cant-find-the-matching-array-of-object-search-by-id

const SingleServiceDetail = () => {
  const { idOfService } = useParams();

  const [service,setService] = useState({});

  useEffect(()=>{
    const url = `http://localhost:5000/services/${idOfService}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])
  
  
  const handleDelivered = (number) => {
    // axios.patch(
    //   `http://localhost:5000/items/${id}`,
    //   {
    //     quantity: item.quantity + number,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   }
    // );
    // const newItem = { ...item, quantity: item.quantity + number };
    // setItem(newItem);
  };


  return (
    <div className="w-75 mx-auto">
      <h5 className="text-center" >You have Choosed :</h5>
      
        <div className="w-50 mx-auto">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>
                {service.description}
              </Card.Text>
              <p>Price:{service.price} & Quantity :{service.quantity}</p>
              <p>Provider:{service.provider}</p>
              <button onClick={() => handleDelivered(-1)} className="btn-style mx-auto d-block">Delivered</button>
            </Card.Body>
          </Card>
        </div>
      
    </div>
  );
};

export default SingleServiceDetail;
