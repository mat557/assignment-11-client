import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleStock.css";

const SingleStock = ({ product }) => {
  const { _id, name, price, description, img } = product;
  const navigate = useNavigate();
  const handleClickToNavigate= (id) =>{
    navigate(`/singleStock/${id}`)
  }

  return (
    <div className="detail-holder">
      <img src={img} alt="" />
      <div className="description">
        <h5>Product Name:{name}</h5>
        <p>Price:{price}</p>
        <p>Address:{description}</p>
      </div>
      <button onClick={()=> handleClickToNavigate(_id)} className="btn-style">Update</button>
    </div>
  );
};

export default SingleStock;
