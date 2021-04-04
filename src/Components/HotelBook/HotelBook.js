import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../travelFakeData';

const HotelBook = () => {
    const { id } = useParams();
    const data = fakeData.find(td => td.id == id);
    return (
        <div className="d-flex justify-content-center">
            <div>
                <img width="150px" src={data.image} alt="" />
            </div>
            <div>
                <h1>{data.name}</h1>
                <p>{data.title}</p>
            </div>
        </div>
    );
};

export default HotelBook;