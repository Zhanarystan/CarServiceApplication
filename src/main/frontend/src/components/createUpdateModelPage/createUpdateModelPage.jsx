import React,{useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';

const CreateUpdateModelPage = (props) => {
    let history = useHistory();
    let {Id} = useParams();
    const [title, setTitle] = useState("Create Model");

    const [modelId, setModelId] = useState(null);
    const [modelName, setModelName] = useState(null);
    const [make, setMake] = useState({});

    const [makes, setMakes] = useState([]);

    const [makeName, setMakeName] = useState(null);

    useEffect(() => {
        props.service.getAllMakes()
            .then((data) => {
                setMakes(data);
            });

        if(props.mode==="edit"){
            props.service.getModelById(Id)
                .then((data) => {
                    setModelId(data.id);
                    setModelName(data.name);
                    setMake(data.make);
                    setMakeName(data.make.name);
                });
            setTitle("Edit Make");
            }
        },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        
            console.log("Make fecthed");
            console.log(make);
        if(props.mode==='edit'){
            const data = {
                id: modelId,
                name: modelName,
                make: make
            }
             props.service.addData(data, 'model/update')
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        }
        else{
            const data = {
                name: modelName,
                make: make
            }
            props.service.addData(data, 'model/create')
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        }
        
        history.push('/admin/models');
    }

    const handleDelete = () => {
        props.service.addData(modelId, `model/delete/${modelId}`)
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
        history.push('/admin/models');
    }

    const handleDataListChange = (e) => {
        props.service.getMakeByName(e.target.value)
                .then((data) => {
                    setMake(data);
                });
    }

    

    return(
        <div className="container mt-5">
            <h1>{title}</h1>
            <div className="row">
                <div className="col-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Model</label>
                            <input 
                                className="form-control"
                                type="text"
                                value={modelName}
                                onChange={(e) => setModelName(e.target.value)}    
                            />
                        </div>
                        <div className="form-group">
                            <label>Make</label>
                            <input
                                className="form-control"
                                type="text"
                                list="found_makes"
                                value={makeName}
                                onChange={(e) => {handleDataListChange(e);setMakeName(e.target.value)}}    
                            />
                            <datalist id="found_makes">
                                {makes.map((make) => {
                                    return <option value={make.name}/>
                                })}
                            </datalist>
                            
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

export default CreateUpdateModelPage;