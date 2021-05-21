import React,{useState} from 'react';
import CarSelOrBuyGrid from './carSelOrBuyGrid';
import HotOffersGrid from './hotOffersGrid';

const Wall = (props) => {

    return(
        <div className="container">
            <CarSelOrBuyGrid/>
            <HotOffersGrid service={props.service}/>
        </div>
    )
}

export default Wall;