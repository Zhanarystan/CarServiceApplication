import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../userContext';



const MyAdsPage = ({service, changeInAdminPage}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {

        service.getCarsByUser(JSON.parse(localStorage.getItem('currentUser')).id)
            .then((data) => {
                setCars(data);
            });
    },[changeInAdminPage]);
    return(
        <div className="container mt-5">
            <div class="row row-cols-1 row-cols-md-3">
                {cars.map((item) => {
                    return (
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src={`http://localhost:8000/api/file/viewphoto/${item.mainPictureUrl}`}
                             class="card-img-top" 
                             alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.make} {item.model} {item.year}</h5>
                                <p class="card-text">{item.price}</p>
                                <Link to={`/car_edit/${item.id}`}>EDIT</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default MyAdsPage;