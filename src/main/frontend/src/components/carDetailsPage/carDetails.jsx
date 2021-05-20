import React from 'react';

const CarDetails = ({car, user}) => {

    return(
        <>
        <h5>{car.price} KZT</h5>
        {car.initialFee!==0?
        <div>
            <div className="d-flex">
                <p style={{flexGrow:1}}>Payment for year</p>
                <p style={{backgroundColor:"yellow"}}>{Math.floor((car.price - car.initialFee)/12)}KZT</p>
            </div>
            <div className="d-flex">
                <p style={{flexGrow:1}}>Initial fee</p>
                <p>{car.initialFee}</p>
            </div>
            <div className="form-group">
                <div className="btn btn-lg btn-primary">CALCULATE FOR CREDIT</div>
            </div>
            </div>:null}
            <div className="d-flex">
                <p style={{flexGrow:1}}>City</p>
                <p>{car.city}</p>
            </div>
            <div className="d-flex">
                <p style={{flexGrow:1}}>Carcase</p>
                <p>{car.carcaseType}</p>
            </div>
            <div className="d-flex">
                <p style={{flexGrow:1}}>Engine volume</p>
                <p>{car.engineVolume}({car.engineType})</p>
            </div>
            <div className="d-flex">
                <p style={{flexGrow:1}}>Color</p>
                <p>{car.color}</p>
            </div>
            <div className="d-flex">
                <p style={{flexGrow:1}}>Gearbox</p>
                <p>{car.gearbox}</p>
            </div>
            <hr/>
            <div className="form-group">
                <p>Seller Contacts</p>
                <p>{user.firstName} {user.lastName}</p>
                <div className="d-flex">
                    <p style={{flexGrow:1}}>Email</p>
                    <p>{user.email}</p>
                </div>
                <div className="d-flex">
                    <p style={{flexGrow:1}}>Phone</p>
                    <p>{user.phoneNumber}</p>
                </div>
            </div>
        </>
    )
}

export default CarDetails;