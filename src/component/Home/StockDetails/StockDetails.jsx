import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCustom from '../../../hook/useCustom';
import SingleStock from '../SingleStock/SingleStock';
import './StockDetails.css';

const StockDetails = () => {
    const navigate = useNavigate();
    const [data] = useCustom();
    const products = data.slice(0,6);

    const handleManage = () =>{
        navigate('/inventory');
    }


    return (
        <div id='stock' className='total-stock'>
            <h1 className='text-center mt-4' style={{color:'rgba(216, 71, 4, 0.894)'}}>Check Our Stored Product</h1>
            <div className='stock-holder'>
                {
                    products.map(product=>(
                        <SingleStock
                        key={product._id}
                        product={product}
                        ></SingleStock>
                    ))
                }
            </div>
            <button onClick={handleManage} className='w-50 mx-auto d-block mt-5 style-button'>Manage Inventory</button>
        </div>
    );
};

export default StockDetails;