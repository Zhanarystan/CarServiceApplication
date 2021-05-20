import React,{useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {countries, carcase_types, engine_types, gearboxes, colors} from './constants';
import ImageUploaderComponent from './imageUploaderComponent';
import ImageList from './imageList';
import UserContext from './../userContext';

const CarPostPageWrap = (props) => {
 
    return(
          <UserContext.Consumer>
              {
                  (value) => {
                      return <CarPostPage currentUser={value} mode={props.mode} service={props.service} 
                                        setChangeInAdminPage={props.setChangeInAdminPage}/>
                  }
              }
          </UserContext.Consumer>
    )
  }


const CarPostPage = (props) => {

    let history = useHistory();
    let {Id} = useParams();
    const [title, setTitle] = useState("Create Car");

    const [cities, setCities] = useState([]); //list of cities
    const [makes, setMakes] = useState([]); //list of makes to create or edit car
    const [models, setModels] = useState([]); //list of models to create or edit car after choosing make
    


    const [city, setCity] = useState({});             //These hooks are needed when editing car and 
    const [cityId, setCityId] = useState(null);   //for getting one unique property during creating
    const [make, setMake] = useState({});             //and editing car as well
    const [makeId, setMakeId] = useState(null);
    const [model, setModel] = useState({});
    const [modelId, setModelId] = useState(null);
    const [mainPictureUrl, setMainPictureUrl] = useState(null);
    const [price, setPrice] = useState(null);
    const [isNew, setIsNew] = useState(false);
    const [country, setCountry] = useState(null);
    const [carcaseType, setCarcaseType] = useState(null);
    const [engineType, setEngineType] = useState(null);
    const [engineVolume, setEngineVolume] = useState(null);
    const [gearbox, setGearbox] = useState(null);
    const [color, setColor] = useState(null);
    const [manufacturedYear, setManufacturedYear] = useState(null);
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(null);
    const [pictures, setPictures] = useState([]);
    const [description, setDescription] = useState(null);
    const [initialFee, setInitialFee] = useState(null);

    const [car, setCar] = useState({});

    const [modelFieldDisabled, setModelFieldDisabled] = useState(true);
    const [change, setChange] = useState(null);
    useEffect(() => {
        
        props.service.getAllMakes()
            .then((data) => {
                setMakes(data);
            });
        

        props.service.getAllCities()
            .then((data) => {
                setCities(data);
            });

        
        if(props.mode === "edit"){
            props.service.getCarById(Id)
                .then((data) => {
                    setCar(data);
                    setCity(data.city);
                    setCityId(data.city.id);
                    setUser(data.postedBy);
                    setUserId(data.postedBy.id);
                    setMake(data.make);
                    setMakeId(data.make.id);
                    setModel(data.model);
                    setModelId(data.model.id);
                    setMainPictureUrl(data.mainPictureUrl);
                    setPrice(data.price);
                    setManufacturedYear(data.manufacturedYear);
                    setIsNew(data.new);
                    setCountry(data.country);
                    setCarcaseType(data.carcaseType);
                    setEngineType(data.engineType);
                    setEngineVolume(data.engineVolume);
                    setGearbox(data.gearbox);
                    setColor(data.color);
                    setPictures(data.pictures);
                    setDescription(data.description);
                    setInitialFee(data.initialFee);
                });
            setTitle("Edit Car");
        }
    },[change])

    const handleDelete = () => {
        props.service.addData(car.id,`car/delete/${car.id}`)
                .then((response) => {
                    props.setChangeInAdminPage(response);
                })
                history.push('/myads');
    }

    const handleMakeChange = (e) => {
        setMakeId(e.target.value);
        
        props.service.getModelsByMakeId(e.target.value)
            .then((data) => {
                setModels(data);
            });

        setModelFieldDisabled(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id:car.id,
            cityId: cityId,
            makeId: makeId,
            modelId: modelId,
            creatorId: props.currentUser.id,
            price: price,
            manufacturedYear:manufacturedYear,
            new: isNew,
            country: country,
            carcaseType: carcaseType,
            engineType: engineType,
            engineVolume: engineVolume,
            gearbox: gearbox,
            color: color,
            description,
            initialFee
        };
        if(props.mode==="create"){
            props.service.addData(data,"car/create")
                .then((data) => {
                    props.setChangeInAdminPage(data);
                });
        
        }
        else{
            props.service.addData(data,"car/update")
                .then((data) => {
                    props.setChangeInAdminPage(data);
                });
            
        }
        console.log(makeId);
        console.log(modelId);
        console.log(cityId);
        console.log(price);
        console.log(isNew);
        console.log(country);
        console.log(carcaseType);
        
        console.log(carcaseType);
        console.log(engineVolume);
        console.log(engineType);
        console.log(gearbox);
        console.log(color);
        history.push('/myads');
    }


    const handleDescriptionChange = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value);
    }

    return(
        <div className="container mt-5">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
            <div className="row">
            
                <div className="col-6">
                    <div className="form-group">
                            <label>Make</label>
                            <select className="form-control"
                            defaultValue={makeId}
                            onChange={handleMakeChange}>
                                {props.mode==="edit"?
                                <option value={make.id} selected>{make.name}</option>
                                :<option selected disabled>Choose make</option>
                                }
                                {makes.map((item) => {
                                    if(makeId===item.id){
                                        return;
                                    }
                                    return <option value={item.id}>{item.name}</option>
                                })}
                            </select>
                    </div>
                        <div className="form-group">
                        <label>Model</label>
                            <select className="form-control"
                            defaultValue={modelId}
                            disabled={modelFieldDisabled} 
                                onChange={(e) => setModelId(e.target.value)}
                            >
                                {props.mode==="edit"?
                                <option value={model.id} selected>{model.name}</option>
                                :<option selected disabled>Choose model</option>
                                }
                                {models.map((item) => {
                                    if(model.id===item.id){
                                        return;
                                    }
                                    return <option value={item.id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                        <label>City</label>
                            <select className="form-control"
                                defaultValue={cityId}
                                onChange={(e) => setCityId(e.target.value)}
                            >
                                {props.mode==="edit"?
                                <option value={city.id} selected>{city.name}</option>
                                :<option selected disabled>Choose city</option>
                                }
                                {cities.map((item) => {
                                    if(cityId===item.id){
                                        return;
                                    }
                                    return <option value={item.id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label>Price</label>
                            <input
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Manufactured Year</label>
                            <input
                                className="form-control"
                                value={manufacturedYear}
                                onChange={(e) => setManufacturedYear(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Is New Car</label>
                            <input style={{marginLeft:"10px"}} type="radio"
                            value={isNew}
                            onClick={(e) => setIsNew(!isNew)} checked={isNew}/>
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" 
                            className="form-control"
                            list="country_list"
                            value={country}
                                onChange={(e) => {setCountry(e.target.value)}}/>
                            <datalist id="country_list" >
                                {countries.map((c) => {
                                    return <option value={c.name}/>
                                })}
                            </datalist>
                        </div>
                        <div className="form-group">
                        
                            <label>Carcase Type</label>
                            <input type="text" 
                            className="form-control"
                            list="carcase_type_list"
                            value={carcaseType}
                                onChange={(e) => {setCarcaseType(e.target.value)}}/>
                            <datalist id="carcase_type_list" >
                                {carcase_types.map((c) => {
                                    return <option value={c.name}/>
                                })}
                            </datalist>
                        </div>
                </div>
                <div className="col-6">
                <div className="form-group">
                            <label>Engine Type</label>
                            <select className="form-control"
                            onChange={(e) => setEngineType(e.target.value)}>
                                {props.mode==="edit"?
                                <option value={engineType} selected>{engineType}</option>
                                :<option selected disabled>Choose engine type</option>
                                }
                                {engine_types.map((item) => {
                                    return <option value={item.name}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Engine Volume</label>
                            <input type="text" className="form-control" 
                                value={engineVolume}
                                onChange={(e) => setEngineVolume(e.target.value)}
                                />
                        </div>
                        <div className="form-group">
                            <label>Gearbox</label>
                            <select className="form-control"
                            value={gearbox}
                            onChange={(e) => setGearbox(e.target.value)}>
                                {props.mode==="edit"?
                                <option value={gearbox} selected>{gearbox}</option>
                                :<option selected disabled>Choose gearbox</option>
                                }
                                {gearboxes.map((item) => {
                                    return <option value={item.name}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Color</label>
                            <select className="form-control"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}>
                                {props.mode==="edit"?
                                <option value={color} selected>{color}</option>
                                :<option selected disabled>Choose color</option>
                                }
                                {colors.map((item) => {
                                    return <option value={item.name}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea 
                                style={{height:"200px"}}
                                className="form-control"
                                value={description}
                                onChange={handleDescriptionChange}/>
                        </div>
                        <div className="form-group">
                            <label>Initial Fee</label>
                            <input
                                className="form-control"
                                value={initialFee}
                                onChange={(e) => setInitialFee(e.target.value)}
                            />
                        </div>
                {props.mode==="edit"?<>
                        <ImageUploaderComponent mainPictureUrl={mainPictureUrl} carId={car.id}
                                                setChange={setChange}/>
                        <ImageList pictures={pictures} carId={car.id}
                                    setChange={setChange}/>
                                    </>
                :null}
                </div>
                
                </div>    
                <div className="form-group">
                            <button type="submit" className="btn btn-success">{props.mode==="edit"?"UPDATE":"CREATE"}</button>
                        </div>
                        {props.mode==="edit"?
                        <div className="form-group">
                            <button className="btn btn-danger" onClick={handleDelete}>DELETE</button>
                        </div>
                    :null}
                    <Link to="/" >Back to home</Link>
                </form>        
        </div>
    )
}

export default CarPostPageWrap;