import React, {useState} from 'react';
import {countries, carcase_types, engine_types, gearboxes, colors} from './constants';

const FilterSidebar = (props) => {

    const [yearFrom, setYearFrom] = useState(null);
    const [yearTo, setYearTo] = useState(null);

    const [priceFrom, setPriceFrom] = useState(null);
    const [priceTo, setPriceTo] = useState(null);

    const [country, setCountry] = useState(null);

    const [carcaseType, setCarcaseType] = useState(null);

    const [engineType, setEngineType] = useState(null);
    
    const [engineVolumeFrom, setEngineVolumeFrom] = useState(null);

    const [engineVolumeTo, setEngineVolumeTo] = useState(null);

    const [gearbox, setGearbox] = useState(null);

    const [color, setColor] = useState(null);
 

    const handleSearch = () => {
        const data = {
            yearFrom:yearFrom!==''?yearFrom:null,
            yearTo:yearTo!==''?yearTo:null,
            priceFrom:priceFrom!==''?priceFrom:null,
            priceTo:priceTo!==''?priceTo:null,
            country:country!==''?country:null,
            engineType:carcaseType!==''?carcaseType:null,
            engineVolumeFrom:engineVolumeFrom!==''?engineVolumeFrom:null,
            engineVolumeTo:engineVolumeTo!==''?engineVolumeTo:null,
            gearbox:gearbox!==''?gearbox:null,
            color:color!==''?color:null
        };
        props.setSelectedPage(1);
        props.setSearchProperties1(data);
    }

    return(
        <div className="card mt-5">
            <div className="card-body">
                <div className="form-group">
                    <label>Manufactured Year</label>
                    <div className="d-flex">
                        <input className="form-control" placeholder="from" type="number"
                            value={yearFrom}
                            onChange={(e) => setYearFrom(e.target.value)} />
                        <input className="form-control" placeholder="to" type="number"
                            value={yearTo} 
                            onChange={(e) => setYearTo(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <div className="d-flex">
                        <input className="form-control" placeholder="from" type="number"
                            onChange={(e) => setPriceFrom(e.target.value)}
                        />
                        <input className="form-control" placeholder="to" type="number" 
                            onChange={(e) => setPriceTo(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input className="form-control" type="text" list="country_list"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />    
                    <datalist id="country_list" >
                                {countries.map((c) => {
                                    return <option value={c.name}/>
                                })}
                    </datalist>            
                </div>
                <div className="form-group">
                    <label>Carcase Type</label>
                    <input className="form-control" type="text" list="carcase_type_list" 
                        value={carcaseType}
                        onChange={(e) => setCarcaseType(e.target.value)}
                    />    
                    <datalist id="carcase_type_list" >
                                {carcase_types.map((c) => {
                                    return <option value={c.name}/>
                                })}
                            </datalist> 
                </div>
                <div className="form-group">
                    <label>Engine Type</label>
                    <input className="form-control" type="text" list="engine_types_list"
                        value={engineType}
                        onChange={(e) => setEngineType(e.target.value)}
                    />    
                    <datalist id="engine_types_list" >
                                {engine_types.map((c) => {
                                    return <option value={c.name}/>
                                })}
                            </datalist> 
                </div>
                <div className="form-group">
                    <label>Engine Volume</label>
                    <div className="d-flex">
                        <input className="form-control" placeholder="from" type="number"
                            value={engineVolumeFrom}
                            onChange={(e) => setEngineVolumeFrom(e.target.value)}
                        />
                        <input className="form-control" placeholder="to" type="number" 
                            value={engineVolumeTo}
                            onChange={(e) => setEngineVolumeTo(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Gearbox</label>
                    <input className="form-control" type="text" list="gearbox_list" 
                        value={gearbox}
                        onChange={(e) => setGearbox(e.target.value)}
                    />    
                    <datalist id="gearbox_list" >
                                {gearboxes.map((c) => {
                                    return <option value={c.name}/>
                                })}
                            </datalist> 
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input className="form-control" type="text" list="color_list" 
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />    
                    <datalist id="color_list" >
                                {colors.map((c) => {
                                    return <option value={c.name}/>
                                })}
                            </datalist> 
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar;