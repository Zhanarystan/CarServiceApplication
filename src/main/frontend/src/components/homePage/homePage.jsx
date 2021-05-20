import React,{useState} from 'react';
import Banner from './banner';
import Wall from './wall';

// const useStyles = makeStyles(theme => ({
//     banner:{
//         height:"500px",
//         width:"100%",
//         backgroundColor:'#eeeee4',
//         marginTop:"80px",
//     },
//     logo: {
//         width: '400px',
//     },
//     bannerInfoh1: {
//         textAlign: 'center',
        
//     },
//     bannerInfo:{
//         marginTop: '50px',
//         padding: '20px',
//     },
//     gettingStartedButton:{
//         width: "60%",
//         height: "60px",
//         marginLeft:'auto',
//         marginRight:'auto',        
//     },
//     wallpaper1:{
//         minHeight:"100%",
//         width:"100%",
//     },
//     buyLink:{
//         backgroundImage: `url(${process.env.PUBLIC_URL + '/img/bCar.jpg'})`,
//         width:"100%",
//         height:"250px",
//         marginRight:'auto',
//         marginLeft:'auto',
//     },
    
//     sellLink:{
//         backgroundImage: `url(${process.env.PUBLIC_URL + '/img/sCar.jpg'})`,
//         width:"100%",
//         height:"250px",
//         marginRight:'auto',
//         marginLeft:'auto',
//     },
//     media: {
//         height: 140,
//       },
    
    
// }));

const HomePage = () => {

    return(
        <>
            <Banner />
            <Wall/>
        </>
    )
}

export default HomePage;

