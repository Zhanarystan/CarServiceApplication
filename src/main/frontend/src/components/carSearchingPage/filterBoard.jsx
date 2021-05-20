import React,{useState, useEffect} from 'react';

const FilterBoard = (props) => {


    const [cities, setCities] = useState([]);
    const [selectedCityId, setSelectedCityId] = useState(null);

    const [makes, setMakes] = useState([]);
    const [selectedMakeId, setSelectedMakeId] = useState(null);

    const [models, setModels] = useState([]);
    const [selectedModelId, setSelectedModelId] = useState(null); 

    

    useEffect(() => {
            
        props.service.getAllCities()
            .then((data) => {
                setCities(data);
            });
        props.service.getAllMakes()
            .then((data) => {
                setMakes(data);
            });
        if(selectedMakeId!==null){
            props.service.getModelsByMakeId(selectedMakeId) 
                .then((data)=>{
                    setModels(data);
                });
        }
        else{
            setModels([]);
        }


    },[selectedCityId, selectedMakeId, selectedModelId]);

    


    const handleMakeChange = (makeId) => {
        setSelectedMakeId(makeId);
    }

    const handleSearch = () => {
        props.setSearchProperties({
            cityId: selectedCityId,
            makeId: selectedMakeId,
            modelId: selectedModelId
        });
        props.setSelectedPage(1);
    }

    const modelsChoice = <div className="d-flex">
                            <h6 style={{marginRight:"40px"}}>Models:</h6>
                            <div style={{columnWidth:"150px"}}>
                                {models.map((m) => {
                                    return <button type="button" 
                                                    className={selectedModelId===m.id?"btn btn-sm btn-primary"
                                                    :"btn btn-sm btn-outline-primary"}
                                                    onClick={() => setSelectedModelId(selectedModelId===m.id?null:m.id)}
                                                    style={{width: "150px"}}>{m.name}</button>
                                })}
                                
                            </div>
                        </div>


    return(
            <div class="jumbotron mb-4">
                <div className="d-flex mb-4">
                    <h6 style={{marginRight:"40px"}}>City:</h6>
                    <div style={{columnWidth:"100px"}}>
                        {cities.map((c) => {
                            return <button type="button" 
                                            className={selectedCityId===c.id?"btn btn-sm btn-primary"
                                            :"btn btn-sm btn-outline-primary"}
                                            onClick={() => setSelectedCityId(selectedCityId===c.id?null:c.id)}
                                            style={{width: "100px", marginBottom:"10px"}}>{c.name}</button>
                        })}
                        
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <h6 style={{marginRight:"40px"}}>Make:</h6>
                    <div style={{columnWidth:"150px"}}>
                        {makes.map((m) => {
                            return <button type="button" 
                                            className={selectedMakeId===m.id?"btn btn-sm btn-primary"
                                            :"btn btn-sm btn-outline-primary"}
                                            onClick={() => setSelectedMakeId(selectedMakeId===m.id?null:m.id)}
                                            style={{width: "150px"}}>{m.name}</button>
                        })}
                        
                    </div>
                </div>
                {models.length!==0?modelsChoice:null}
                
                <button class="btn btn-primary btn-lg" type="button" onClick={handleSearch}>Search</button>
            </div>
    )
}

export default FilterBoard;