import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import HotOfferPaper from './hotOfferPaper';

const hotSalesAuto = [
    {id:1, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:2, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:3, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:4, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:5, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:6, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:7, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:8, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:9, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:10, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:11, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
    {id:12, manufacturer: 'Toyota', model: 'Camry', new: false, imageAmount: 5, price: '10000000KZT', 
    mainImage: 'https://avatars.mds.yandex.net/get-autoru-vos/2023766/f23714343e96ef511847e576d77a946a/456x342'},
]
const HotOffersGrid = () => {

    return (
                <Grid item style={{textAlign:'center', marginTop:'100px'}}>
                    <Typography variant='h4'>HOT OFFERS IN YOUR CITY</Typography>
                    <Grid container>
                        {hotSalesAuto.map(car => {
                            return <HotOfferPaper    
                            car={car}
                            />
                        })}
                    
                    </Grid>
                </Grid>
    )
}

export default HotOffersGrid;