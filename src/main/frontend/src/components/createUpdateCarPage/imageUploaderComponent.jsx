import React,{useState,useEffect} from 'react';
import axios from 'axios';
const ImageUploaderComponent = (props) => {

    
    const [selectedFile, setSelectedFile] = useState({});
    const [selectedFileName, setSelectedFileName] = useState(null);
    const {mainPictureUrl,carId} = props;

    
    const fileSelectedHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const fileUploadHandler = (e) => {
        e.preventDefault();
        const fd = new FormData();
        console.log(selectedFile.name);
        fd.append('file', selectedFile);
        axios.post(`http://localhost:8000/api/file/set_main_picture/${carId}`, fd)
            .then(res => {
                
                props.setChangeInAdminPage(res);
            });
    }
    return( 
        <div>
            <div className="form-group">
                <img src={`http://localhost:8000/api/file/viewphoto/${mainPictureUrl}`} alt="pic" style={{width:"60%",height:"200px"}}/>
            </div>
            <form onSubmit={fileUploadHandler}>
                <div className="form-group">
                    <input  type="file" onChange={fileSelectedHandler} />
                </div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={fileUploadHandler}>UPLOAD MAIN PICTURE</button>
                </div>
            </form>
        </div>
    )
}

export default ImageUploaderComponent;