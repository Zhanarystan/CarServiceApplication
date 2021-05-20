import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const CarSelOrBuyGrid = (props) => {
    const {classes} = props;
    let history = useHistory();
    const [selHover, setSelHover] = useState(false);
    const [buyHover, setBuyHover] = useState(false);
    return (
        <>

        <Grid style={{textAlign:'center',marginBottom:"80px"}}>
                    <Typography variant='h5'>
                        75000 ads on the website, 359 declared today
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card 
                        onClick = {() => history.push('/car_post')}
                        onMouseOver={() => {setSelHover(true)}}
                        onMouseOut={() => setSelHover(false)}
                        style={{
                            transform: `${selHover?'scale(1.05)':'scale(1)'}`,
                            transition:'0.8s',
                        }}
                        >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image={process.env.PUBLIC_URL+'/img/sCar.jpg'}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                SELL CAR
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>        
                    </Grid>
                
                    <Grid item xs={6}>
                        <Card 
                            onClick = {() => history.push('/searching')}
                            onMouseOver={() => setBuyHover(true)}
                            onMouseOut={() => setBuyHover(false)}
                            style={{
                                transform: `${buyHover?'scale(1.05)':'scale(1)'}`,
                                transition:'0.8s',
                            }}
                        >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image={process.env.PUBLIC_URL+'/img/sCar.jpg'}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                BUY CAR
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>        
                    </Grid>
                </Grid>
                </>
    )
}

export default CarSelOrBuyGrid;