import React,{useState, useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import CarDescription from './carDescription';
import CarDetails from './carDetails';
import CarPictures from './carPictures';
import InstallmentPlan from './installmentPlan';

const CarDetailsPage = (props) => {
    let history = useHistory();
    let {Id} = useParams();

    const [car, setCar] = useState({});
    const [user, setUser] = useState({});
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        props.service.getCarDetails(Id)
            .then((data) => {
                setCar(data);
                setUser(data.postedBy);
                setPictures(data.pictures);            
            });
    },[])

    return(
        <div className="container mt-5">
            <h4>{car.make}&nbsp; &nbsp;{car.model}&nbsp;&nbsp;  {car.manufacturedYear}y</h4>
            <hr/>
            <div className="row">
                <div className="col-4">
                    <CarDetails user={user} car={car}/>
                </div>
                <div className="col-8">
                    <CarPictures mainPictureUrl={car.mainPictureUrl} pictures={pictures}/>
                    <CarDescription description={car.description}/>
                    {car.initialFee!==0?
                    <InstallmentPlan price={car.price} initialFee={car.initialFee}/>
                    :null}
                </div>
            </div>
            
        </div>
    )
}

export default CarDetailsPage;