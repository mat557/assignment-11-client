import React from 'react';
import { useParams } from 'react-router-dom';
// import useCustom from '../../../hook/useCustom';

const SingleServiceDetail = () => {
    const {idOfService} = useParams();

    // const [data,setData] = useCustom();

    // console.log(data)

    // const singleItem = data.find(element => element.id !== idOfService);
    // console.log(singleItem);
    return (
        <div>
            <h2>You have Choosed :{idOfService}</h2>
            {/* <h2>Total Products :{data.length}</h2> */}
        </div>
    );
};

export default SingleServiceDetail;