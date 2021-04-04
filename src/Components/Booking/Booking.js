import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../travelFakeData';
const Booking = () => {
    const { id } = useParams();
    const data = fakeData.find(td => td.id == id);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-5 ms-2">
                    <h1>{data.name}</h1>
                    <p>{data.title}</p>
                </div>

                <div className="col-md-7">
                    <div className="ms-5 ps-5 mt-5">
                        <form action="">
                            <input type="text" placeholder="origin" />
                            <br /> <br />
                            <input type="text" value={data.name} />
                        </form>
                        <br/><br/>
                        <Link to ={`/hotel/${data.id}`}>
                        <button>Start booking</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;