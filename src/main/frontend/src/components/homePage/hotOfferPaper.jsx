import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
const HotOfferPaper = (props) => {

    const [hotOfferHoverId, setHotOfferHoverId] = useState(false);
    const {car, pictureAmount} = props;
    
   
    return ( 
        <>
            <Paper elevation={3} style={{
                                backgroundImage:`url(http://localhost:8000/api/file/viewphoto/${car.mainPictureUrl})`,
                                backgroundSize:'150px 150px',
                                width:'150px',
                                height:'150px',
                                }}
                                onMouseOver={() => setHotOfferHoverId(true)} 
                                onMouseLeave={()=>setHotOfferHoverId(false)}
                                component={Link}
                                to={`/car_details/${car.id}`}
                                >
                {hotOfferHoverId?<Grid style={{width:"100%", height:"100%", backgroundColor:'rgb(0, 0, 0, 0.4)',color:'white'}}>
                    <Typography align='right'>{car.manufacturedYear} year</Typography>
                    <div style={{marginTop:'20%'}}>
                    <Typography>{car.make} {car.model}</Typography>
                    <Typography>{car.price}</Typography>
                    </div>  
                </Grid>:null}
            </Paper>
        </>
    )
}

export default HotOfferPaper;