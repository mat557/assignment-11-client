import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

// https://stackoverflow.com/questions/72082801/cant-find-the-matching-array-of-object-search-by-id

const SingleServiceDetail = () => {
  const navigate = useNavigate();
  const { idOfService } = useParams();
  const [service,setService] = useState({});
  const [res,setRest] = useState({})

  useEffect(()=>{
    const url = `http://localhost:5000/services/${idOfService}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])


  useEffect(()=>{
    const url = `http://localhost:5000/services/${idOfService}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setRest(data)
    })
  },[])
  
  const handleDelivered = (num) =>{
    const total =  service.quantity;
    const final = parseInt(total) + num;

    console.log(total,final);
    const url = `http://localhost:5000/services/${idOfService}`;
    fetch(url,{
      method :'PUT',
      headers :{
        'content-type': 'application/json',
      },
      body : JSON.stringify(final)
    })
    .then(res => res.json())
    .then(product =>{
      console.log(product);
    })
  }

  const handleManage = () =>{
    navigate('/inventory');
}


  return (
    <div className="container">
      <h5 className="text-center" >You have Choosed :</h5>
      
        <div className="w-75 m-auto">
          <Card >
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>
                {service.description}
              </Card.Text>
              <p>Price:{service.price} & Quantity :{res.quantity}</p>
              <p>Provider:{service.provider}</p>
              <button onClick={() => handleDelivered(-1)} className="btn-style mx-auto d-block">Delivered</button>
            </Card.Body>
          </Card>
        </div>
        <button onClick={handleManage} className='w-50 mx-auto d-block mt-5 style-button'>Manage Inventory</button>
    </div>
  );
};

export default SingleServiceDetail;


 
// const handleDelivered = (number) => {
//   axios.patch(
//     `http://localhost:5000/items/${id}`,
//     {
//       quantity: item.quantity + number,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     }
//   );
//   const newItem = { ...item, quantity: item.quantity + number };
//   setItem(newItem);
// };