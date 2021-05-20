import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const CarsContent = ({getData, changeInAdminPage}) => {
    const [cars, setCars] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getData()
        .then((data) => {
          setCars(data);
        })
    },[changeInAdminPage])

    return(
        <div className="container mt-3">
            <div className="row">
                <h2 style={{flexGrow:"0.05"}}>Cars</h2>
                <button type='button' class="btn btn-primary" onClick={() => history.push('/admin/cars/create') }>
                    ADD NEW
                </button>
            </div>
            <div style={{marginTop:"20px"}}>
                    <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">City</th>
                        <th scope="col">Price</th>
                        <th scope="col">Year</th>
                        <th scope="col">Image Amount</th>
                        <th scope="col">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => {
                            return (
                                <tr>
                                    <th scope="row">{car.id}</th>
                                    <td>{car.make}</td>
                                    <td>{car.model}</td>
                                    <td>{car.city}</td>
                                    <td>{car.price}</td>
                                    <td>{car.manufacturedYear}</td>
                                    <td>{car.imageAmount}</td>
                                    <td><Link to={`/admin/cars/${car.id}`}>Details</Link></td>
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CarsContent;