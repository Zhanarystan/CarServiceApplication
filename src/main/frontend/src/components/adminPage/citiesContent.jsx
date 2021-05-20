import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const CitiesContent = ({getData, changeInAdminPage}) => {
    const [cities, setCities] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getData()
        .then((data) => {
          setCities(data);
        })
    },[changeInAdminPage])

    return(
        <div className="container mt-3">
            <div className="row">
                <h2 style={{flexGrow:"0.05"}}>Cities</h2>
                <button type='button' class="btn btn-primary" onClick={() => history.push('/admin/cities/create') }>
                    ADD NEW
                </button>
            </div>
            <div style={{marginTop:"20px"}}>
                    <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">City</th>
                        <th scope="col">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cities.map((city) => {
                            return (
                                <tr>
                                    <th scope="row">{city.id}</th>
                                    <td>{city.name}</td>
                                    <td><Link to={`/admin/cities/${city.id}`}>Details</Link></td>
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CitiesContent;