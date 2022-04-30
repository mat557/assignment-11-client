import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:"500px",color:"rgba(216, 71, 4, 0.894)"}} className='w-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;