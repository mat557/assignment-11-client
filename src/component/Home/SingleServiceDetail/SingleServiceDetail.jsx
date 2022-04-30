import React from 'react';
import { useParams } from 'react-router-dom';

const SingleServiceDetail = () => {
    const {idOfService} = useParams();
    return (
        <div>
            <h2>You have Choosed :{idOfService}</h2>
        </div>
    );
};

export default SingleServiceDetail;