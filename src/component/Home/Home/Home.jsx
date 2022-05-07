import React from 'react';
import Additional from '../Additional/Additional';
import Banner from '../Banner/Banner';
import StockDetails from '../StockDetails/StockDetails';
import TwoService from '../TwoService/TwoService';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TwoService></TwoService>
            <StockDetails></StockDetails>
            <Additional></Additional>
        </>
    );
};

export default Home;