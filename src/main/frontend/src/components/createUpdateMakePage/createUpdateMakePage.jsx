import React,{useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';

const CreateUpdateCityPage = (props) => {
    let history = useHistory();
    let {Id} = useParams();
    const [title, setTitle] = useState("Create Make");

    const [makeId, setMakeId] = useState(null);
    const [makeName, setMakeName] = useState(null);

    useEffect(() => {

        if(props.mode==="edit"){
            props.service.getMakeById(Id)
                .then((data) => {
                    setMakeId(data.id);
                    setMakeName(data.name);
                });
            setTitle("Edit Make");
            }
        },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.mode==='edit'){
            const data = {
                id: makeId,
                name: makeName
            }
             props.service.addData(data, 'make/update')
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        }
        else{
            const data = {
                id: makeId,
                name: makeName
            }
            props.service.addData(data, 'make/create')
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        }
        
        history.push('/admin/makes');
    }

    const handleDelete = () => {
        props.service.addData(makeId, `make/delete/${makeId}`)
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        history.push('/admin/makes');
    }

    const handleMakeNameChange = (e) => {
        console.log(e.target.value);
        setMakeName(e.target.value);
    }

    

    return(
        <div className="container mt-5">
            <h1>{title}</h1>
            <div className="row">
                <div className="col-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Make</label>
                            <input 
                                className="form-control"
                                type="text"
                                value={makeName}
                                onChange={(e) => setMakeName(e.target.value)}    
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
                    <Link to="/admin/makes" >Back to list</Link>
                </div>
            </div>
        </div>
    )
}

export default CreateUpdateCityPage;