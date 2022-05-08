import React from "react";
import { Table } from "react-bootstrap";
import useCustom from "../../../hook/useCustom";

const ManageInventory = () => {
    const [data,setData] = useCustom();


    const handleDelete = (id) =>{
        const confirmation = window.confirm("Are you sure?");
        if(confirmation){
            const url = `http://localhost:5000/services/${id}`;
            fetch(url,{
                method : "DELETE"
            })
            .then(res => res.json())
            .then(product => {
                const rest = data.filter(p => p._id !== id);
                setData(rest);
            })
        }
    }


  return (
    <div className="container">
        <h3 className="text-center style mt-3">All your data at one place</h3>
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
              data.map((item) =>
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
    </div>
  );
};

export default ManageInventory;

