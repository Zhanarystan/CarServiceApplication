import React,{useState, useEffect} from 'react';
import axios from 'axios';

const ImageList = (props) => {
    const {pictures,carId} = props;
    const [selectedFile, setSelectedFile] = useState({});
    const [selectedFileName, setSelectedFileName] = useState(null);

    const fileSelectedHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const fileUploadHandler = (e) => {
        
        const fd = new FormData();
        console.log(selectedFile.name);
        fd.append('file', selectedFile);
        axios.post(`http://localhost:8000/api/file/add_picture/${carId}`, fd)
            .then(res => {
                
                props.setChangeInAdminPage(res);
            });
    }
    return (
        <div>
            <div className="d-flex">
                {pictures.map((item) => {
                    return <img src={`http://localhost:8000/api/file/viewphoto/${item.url}`}
                            style={{width:"100px", heigth:"100px", marginLeft:"10px"}}
                            alt="no" />
                })}
            </div>

            <form className="mt-3" onSubmit={fileUploadHandler}>
                <div className="form-group">
                    <input type="file" onChange={fileSelectedHandler}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-sm btn-success" type="submit">UPLOAD IMAGE</button>
                </div>
            </form>
        </div>
    )
}

export default ImageList;