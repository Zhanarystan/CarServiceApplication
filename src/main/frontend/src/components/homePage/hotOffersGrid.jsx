import { Grid, Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import HotOfferPaper from './hotOfferPaper';


const HotOffersGrid = (props) => {
    const [hotSalesAuto, setHotSalesAuto] = useState([]);
    useEffect(() => {
        props.service.getHotOffers()
            .then((data) => {
                setHotSalesAuto(data);
            });
    },[])
    return (
                <Grid item style={{textAlign:'center', marginTop:'100px'}}>
                    {hotSalesAuto.length!==0?
                    <>
                        <Typography variant='h4'>HOT OFFERS</Typography>
                        <Grid container>
                            {hotSalesAuto.map(car => {
                                return <HotOfferPaper    
                                car={car}
                                
                                />
                            })}
                        
                        </Grid>
                    </>
                    :null}
                </Grid>
    )
}

export default HotOffersGrid;