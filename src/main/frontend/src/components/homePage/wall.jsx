import React,{useState} from 'react';
import CarSelOrBuyGrid from './carSelOrBuyGrid';
import HotOffersGrid from './hotOffersGrid';

const Wall = () => {

    return(
        <div className="container">
            <CarSelOrBuyGrid/>
            <HotOffersGrid/>
        </div>
    )
}

export default Wall;