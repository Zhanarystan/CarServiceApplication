import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const CarList = (props) => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
      const query = Object.assign(props.searchProperties, props.searchProperties1);
      console.log(query);
        props.service.addData(query,'car/get_filtered_cars')
            .then((data) => {
                if(data.length<props.selectedPage*6){
                  setCars(data.slice(props.selectedPage*6-6, data.length));                  
                }
                else{
                  setCars(data.slice(props.selectedPage*6-6, props.selectedPage*6));
                }

                props.setPageAmount((data.length/6)>Math.round(data.length/6)?Math.round(data.length/6)+1:Math.round(data.length/6));  
            });
            //dsad
        //     console.log("IN car LIst")
        //     console.log(props.searchProperties);
    },[props.searchProperties, props.searchProperties1, props.selectedPage])

    return( 
        <div className="mt-5" >
                {cars!==null?cars.map((item) => {
                    return <div class="card mb-3">
                    <div class="row no-gutters">
                      <div class="col-md-3">
                      <img src={`http://localhost:8000/api/file/viewphoto/${item.mainPictureUrl}`}
                         class="card-img" alt="..." 
                         style={{height:"170px"}}
                         />
                         
                      </div>
                      <div class="col-md-9">
                        <div class="card-body"  style={{height:"80%"}}>
                          <div className="d-flex">
                            <Link to={`/car_details/${item.id}`} style={{flexGrow: 1}}><h5 className="card-title" >{item.make} {item.model}</h5></Link>
                            <p>{item.price} KZT</p>
                          </div>
                            <p class="card-text" style={{overflowY:"hidden", height:"100px"}}>{item.description}</p>
                            
                        </div>
                        
                      </div>
                      
                    </div>
                    <div className="card-footer">
                        <div className="d-flex">
                          <small class="text-muted" style={{flexGrow:0.06}}>City: {item.city}</small>
                             <small class="text-muted" style={{flexGrow:0.06}}>Year: {item.manufacturedYear}</small>
                             <small class="text-muted" style={{flexGrow:0.06}}>Views: {item.viewAmount}</small>
                             <small class="text-muted">Intstallment: {item.initialFee!==0?"Yes":"No"}</small>
                             </div>
                        </div>
                  </div>
                }):null}
            </div>
    )
}

export default CarList;