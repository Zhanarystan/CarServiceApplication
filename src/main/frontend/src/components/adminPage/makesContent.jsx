import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const MakesContent = ({getData, changeInAdminPage}) => {
    const [makes, setMakes] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getData()
        .then((data) => {
          setMakes(data);
        })
    },[changeInAdminPage])

    return(
        <div className="container mt-3">
            <div className="row">
                <h2 style={{flexGrow:"0.05"}}>Makes</h2>
                <button type='button' class="btn btn-primary" onClick={() => history.push('/admin/makes/create') }>
                    ADD NEW
                </button>
            </div>
            <div style={{marginTop:"20px"}}>
                    <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Make</th>
                        <th scope="col">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {makes.map((make) => {
                            return (
                                <tr>
                                    <th scope="row">{make.id}</th>
                                    <td>{make.name}</td>
                                    <td><Link to={`/admin/makes/${make.id}`}>Details</Link></td>
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MakesContent;