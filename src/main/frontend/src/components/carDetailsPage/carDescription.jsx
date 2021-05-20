import React,{useState, useEffect} from 'react';

const CarDescription = (props) => {
    const {description} = props;
    return (
        <div className="card">
            <div className="card-body">
                <h3>Description</h3>
                {description}
            </div>
        </div>
    )
}

export default CarDescription;