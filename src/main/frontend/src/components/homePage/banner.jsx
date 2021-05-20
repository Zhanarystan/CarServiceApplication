import React,{useState} from 'react';

const Banner = () => {

    return (
        <div className="container" style={{height:"500px",
        width:"100%",
        backgroundColor:'#eeeee4',
        }}>
            <div style={{paddingTop:"30px",textAlign:'center'}}>
                <h1>AUTOSAUDA</h1>
                <h5>
                    Service provides you a lot of opportunity
                        of selling and buying cars
                </h5>
                <button className="btn btn-lg btn-primary" style={{marginTop:'30px',
                        marginBottom:'20px',}}>
                    GET STARTED
                </button>
                <img 
                        src={process.env.PUBLIC_URL + '/img/carsBanner1.png'}
                        alt="bannerimg"
                        style={{
                            width:"100%"
                        }}/>   

            </div>
        </div>
    )
}

export default Banner;