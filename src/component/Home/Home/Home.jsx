import React from 'react';
import Additional from '../Additional/Additional';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import TwoService from '../TwoService/TwoService';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TwoService></TwoService>
            <Products></Products>
            <Additional></Additional>
        </>
    );
};

export default Home;