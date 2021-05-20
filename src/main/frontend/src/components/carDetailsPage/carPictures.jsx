import React,{useState, useEffect} from 'react';

const CarPictures = (props) => {
    const {mainPictureUrl, pictures} = props;

    const [focusedPic, setFocusedPic] = useState(null);
    useEffect(() => {
        setFocusedPic(`${mainPictureUrl}`);
    },[mainPictureUrl])

    return(
        <>
            <div className="form-group">
            <img src={`http://localhost:8000/api/file/viewphoto/${focusedPic}`}
                         class="card-img" alt="..." 
                         style={{height:"450px"}}
                         />
            </div>
            <div className="form-group">
                <div className="d-flex">
                    <img onClick={() => setFocusedPic(`${mainPictureUrl}`)} src={`http://localhost:8000/api/file/viewphoto/${mainPictureUrl}`}
                                style={{width:"100px", heigth:"100px", marginLeft:"10px"}}
                                alt="no" />
                    {pictures!==null?pictures.map((item) => {
                        return <img onClick={() => setFocusedPic(`${item.url}`)} src={`http://localhost:8000/api/file/viewphoto/${item.url}`}
                                style={{width:"100px", heigth:"100px", marginLeft:"10px"}}
                                alt="no" />
                    }):null}
                </div>
            </div>
        </>
    )
}

export default CarPictures;