import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../Firebase.init";
import Loading from "../../Shared/Loading/Loading";

const ManageInventory = () => {
    const [user,loading] = useAuthState(auth);
    const [items,setItems] = useState([]);
    const [newItems,setNewItems] = useState([]);
      
    useEffect(()=>{
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
        const email = user?.email;
        // console.log(email,requestOptions)
        const url = `https://stormy-brook-59939.herokuapp.com/services?email=${email}`;
        // console.log(url)
        fetch(url,requestOptions)
        .then(res => res.json())
        .then(data => setNewItems(data))
    },[user])


    const handleDelete = (id) =>{
        const confirmation = window.confirm("Are you sure?");
        if(confirmation){
            const url = `https://stormy-brook-59939.herokuapp.com/services/${id}`;
            fetch(url,{
                method : "DELETE"
            })
            .then(res => res.json())
            .then(product => {
                const rest = items.filter(p => p._id !== id);
                setItems(rest);
            })
        }
    }

    const handleOnSubmit = (event) =>{
      event.preventDefault();
      const productData = {
        name : event.target.name.value,
        quantity : event.target.quantity.value,
        provider : event.target.provider.value,
        email : user?.email,
        price : event.target.price.value,
        description : event.target.description.value,
        img : event.target.other.value,
      }
      // console.log(productData)
      fetch('https://stormy-brook-59939.herokuapp.com/services', {
        method:'POST',
        headers: {
          'Content-type' : 'Application/json'
        },
        body: JSON.stringify(productData)
      }).then(res => res.json())
    }
    if(loading){
      return <Loading></Loading>
  }
    

  return (
    <div className="container">
        <h3 className="text-center style mt-3">All your data at one place:</h3>
      <Table responsive striped bordered hover >
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Prod. Name</th>
            <th>Description</th>
            <th>Controll</th>
          </tr>
        </thead>
        <tbody>
          {
              newItems.map((item) =>
                <tr key={item._id}>
                <td>{item.quantity}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><button onClick={() => handleDelete(item._id)} className="btn-style">Delete</button></td>
              </tr>
              )
          }
        </tbody>
      </Table>
      <div>
        <h4 className="text-center style mt-3">Add More data</h4>
        <div className="w-50 mx-auto">
        <form onSubmit={handleOnSubmit}>
          <input className="w-100 mb-2" type="text" name="name" placeholder="product name" required/>
          <br /> 
          <input className="w-100 mb-2" type="text" name="quantity" placeholder="product quantity" required/>
          <br /> 
          <input className="w-100 mb-2"  type="text" name="provider" placeholder="provider name" required/>
          <br />
          <input className="w-100 mb-2"  type="text" name="email" value={user?.email} placeholder="email" readOnly disabled required/>
          <br />
          <input className="w-100 mb-2"  type="text" name="price" placeholder="product price" required/>
          <br />
          <input className="w-100 mb-2" type="text" name="description" placeholder="product description" required/>
          <br /> 
          <input className="w-100 mb-2"  type="text" name="other" placeholder="product image" required/>
          <br />
          <input className="btn-style mx-auto d-block"  type="submit" value="Add Product"/>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;

