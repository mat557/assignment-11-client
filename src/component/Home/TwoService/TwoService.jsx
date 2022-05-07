import React from 'react';
import './TwoServices.css';
import photo1 from '../../../photos/banner-1.jpg';
import photo2 from '../../../photos/banner-2.jpg';

const TwoService = () => {
    return (
        <div id='purposes' className='box-serv'>
            <h1 className='text-center mt-4' style={{color:'rgba(216, 71, 4, 0.894)'}}>Our Purposes</h1>
            <div className="purpose">
                <div className="purpose-type">
                    <img src={photo1} alt="" />
                    <div className='overlay'></div>
                    <div className="des">
                        <h4>Store Your Books</h4>
                        <hr />
                        <p>Store as many books as you want in our warehouse .You can maintain your storage
                        satting in your home using our website.We are  your next business partner to develop the
                        to make your dream come true.
                        </p>
                    </div>
                </div>
                <div className="purpose-type">
                    <img src={photo2} alt="" />
                    <div className='overlay'></div>
                    <div className="des">
                        <h4>Sell Your Books</h4>
                        <hr />
                        <p>        
                        You can sell and contact with your customer staying anywhere in the world .We also have transport system which offer you to have the best delevary system.
                        We are  your next business partner to develop the
                        to make your dream come true.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoService;