import React, { useState } from 'react';
import FakeData from '../../travelFakeData';
import ExactInfo from '../ExactInfo/ExactInfo';
import MainContent from '../MainContent/MainContent';

const FakeDataLoad = () => {
    const [exactData , setExactData] = useState([]);

    const handleClick= (id) => {
        const data = [id];
        setExactData(data)
    }

    return (
        <div>
            <div className="left_side">
                {
                    exactData.map(data => <ExactInfo data={data}></ExactInfo>)
                }
            </div>
            <div className="right_side">
                <div className="row">
                    {
                        FakeData.map(td => <MainContent data={td} handleClick={handleClick} ></MainContent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FakeDataLoad;