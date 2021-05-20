import React,{useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';

const CreateUpdateCityPage = (props) => {
    let history = useHistory();
    let {Id} = useParams();
    const [title, setTitle] = useState("Create City");

    const [cityId, setCityId] = useState(null);
    const [cityName, setCityName] = useState(null);

    useEffect(() => {

        if(props.mode==="edit"){
            props.service.getCity(Id)
                .then((data) => {
                    setCityId(data.id);
                    setCityName(data.name);
                });
            setTitle("Edit City");
            }
        },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.mode==='edit'){
            const data = {
                id: cityId,
                name: cityName
            }
             props.service.addData(data, 'city/update')
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        }
        else{
            const data = {
                id: cityId,
                name: cityName
            }
            props.service.addData(data, 'city/create')
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        }
        
        history.push('/admin/cities');
    }

    const handleDelete = () => {
        props.service.addData(cityId, `city/delete/${cityId}`)
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        history.push('/admin/cities');
    }

    const handleCityNameChange = (e) => {
        console.log(e.target.value);
        setCityName(e.target.value);
    }

    

    return(
        <div className="container mt-5">
            <h1>{title}</h1>
            <div className="row">
                <div className="col-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>City</label>
                            <input 
                                className="form-control"
                                type="text"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}    
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success">{props.mode==="edit"?"UPDATE":"CREATE"}</button>
                        </div>

                    </form>
                    {props.mode==="edit"?
                        <div className="form-group">
                            <button className="btn btn-danger" onClick={handleDelete}>DELETE</button>
                        </div>
                    :null}
                    <Link to="/admin/cities" >Back to list</Link>
                </div>
            </div>
        </div>
    )
}

export default CreateUpdateCityPage;