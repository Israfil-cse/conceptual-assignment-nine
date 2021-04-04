import React from 'react';

const MainContent = (props) => {
    const { id, name, title, image } = props.data;
    const handleClick = props.handleClick;

   
   
    return (
        <div className="col-md-4  mt-5">
            <div className="d-flex justify-content-center">
                <img onClick={() => handleClick(props.data)} width="250px" src={image} alt="" />
            </div>

            <h3 className="ms-5">{name}</h3>

        </div>
    );
};

export default MainContent;