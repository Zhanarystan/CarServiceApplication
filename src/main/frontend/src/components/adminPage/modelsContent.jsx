import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const ModelsContent = ({getData, changeInAdminPage}) => {
    const [models, setModels] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getData()
        .then((data) => {
          setModels(data);
        })
    },[changeInAdminPage])

    return(
        <div className="container mt-3">
            <div className="row">
                <h2 style={{flexGrow:"0.05"}}>Models</h2>
                <button type='button' class="btn btn-primary" onClick={() => history.push('/admin/models/create') }>
                    ADD NEW
                </button>
            </div>
            <div style={{marginTop:"20px"}}>
                    <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Model</th>
                        <th scope="col">Make</th>
                        <th scope="col">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {models.map((model) => {
                            return (
                                <tr>
                                    <th scope="row">{model.id}</th>
                                    <td>{model.name}</td>
                                    <td>{model.make.name}</td>
                                    <td><Link to={`/admin/models/${model.id}`}>Details</Link></td>
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ModelsContent;