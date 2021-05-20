import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
const HotOfferPaper = (props) => {

    const [hotOfferHoverId, setHotOfferHoverId] = useState(false);
    
    const {car} = props;
    
   
    return ( 
        <>
            <Paper elevation={3} style={{
                                backgroundImage:`url(${car.mainImage})`,
                                backgroundSize:'200px 200px',
                                width:'200px',
                                height:'200px',
                                }}
                                onMouseOver={() => setHotOfferHoverId(true)} 
                                onMouseLeave={()=>setHotOfferHoverId(false)}
                                >
                {hotOfferHoverId?<Grid style={{width:"100%", height:"100%", backgroundColor:'rgb(0, 0, 0, 0.4)',color:'white'}}>
                    <Typography align='right'>{car.imageAmount} images</Typography>
                    <div style={{marginTop:'20%'}}>
                    <Typography>{car.manufacturer} {car.model}</Typography>
                    <Typography>{car.price}</Typography>
                    </div>  
                </Grid>:null}
            </Paper>
        </>
    )
}

export default HotOfferPaper;