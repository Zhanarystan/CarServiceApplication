export default class CarApplicationService {

    constructor(jwtToken){
        
        this._apiBase = 'http://localhost:8000/api'
        console.log("ctor");
        console.log(jwtToken);
        this.jwtToken =jwtToken!==null?`Bearer ${jwtToken}`:"";
        
        
    }

    getResource = async (url) => {
        console.log(`${this._apiBase}${url}`);
        
        const res = await fetch(`${this._apiBase}${url}`, {
            method:'GET',
            headers: {
              "Content-Type": "application/json",
             "Authentication": this.jwtToken
            }
        });

        if(!res.ok){
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }

        return await res.json();
    }

    getAllCities = async () => {
        const res = await this.getResource('/city/all_cities');
        return res;
    }

    getCity = async (cityId) => {
        const res = await this.getResource(`/city/${cityId}`);
        return res;
    }

    getAllMakes = async () => {
        const res = await this.getResource('/make/all_makes');
        return res;
    }


    getMakeById = async (makeId) => {
        const res = await this.getResource(`/make/get_make_by_id/${makeId}`);
        return res;
    }

    getMakeByName = async (makeName) => {
        const res = await this.getResource(`/make/get_make_by_name/${makeName}`);
        return res;
    }

    getAllUsers = async () => {
        const res = await this.getResource(`/user/all_users`);
        return res;
    }

    getAllModels = async () => {
        const res = await this.getResource('/model/all_models');
        return res;
    }

    getModelsByMakeName = async (makeName) => {
        const res = await this.getResource(`/model/models_by_make_name/${makeName}`);
        return res;
    }

    getModelsByMakeId = async (makeId) => {
        const res = await this.getResource(`/model/get_models_by_make_id/${makeId}`);
        return res;
    }

    getModelById = async (modelId) => {
        const res = await this.getResource(`/model/get_model_by_id/${modelId}`);
        return res;
    }

    getCarById = async(carId) => {
        const res = await this.getResource(`/car/get_car_by_id/${carId}`);
        return res;
    }

    getCarDetails = async(carId) => {
        const res = await this.getResource(`/car/car_details/${carId}`);
        return res;
    }

    getAllCars = async () => {
        const res = await this.getResource('/car/all_cars');
        return res;
    }

    getCarsByUser = async (userId) => {
        const res = await this.getResource(`/car/get_cars_by_user/${userId}`);
        return res;
    }


    registerUser = async(data) => {
        const response = await fetch("http://localhost:8000/signup",{
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });

        let user = null;

        if(response.status === 200){
            user = await response.json();
        }
        return user;
    }

    getCurrentUser = async(JwtToken)=>{
        const bearer = "Bearer "+ JwtToken;

        const response = await fetch("http://localhost:8000/api/profile", {
            method:'GET',
            headers: {
              "Content-Type": "application/json",
              "Authentication": bearer
            }
        });

        if(response.status===200){
            let res = await response.json();
            return res;
        }    
    }

    addData = async (data, url) => {
        console.log(data);
        const response = await fetch(`${this._apiBase}/${url}`,{
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authentication": this.jwtToken
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });

        let newData = null;

        if(response.status === 200){
            newData = await response.json();
        }
        return newData;
    }



    _transformRegisterDTO = (registerDTO) => {
        return{
            email: registerDTO.email,
            oldPassword: registerDTO.oldPassword,
            password: registerDTO.password,
            rePassword: registerDTO.rePassword,
            firstName: registerDTO.firstName,
            lastName: registerDTO.lastName,
            phoneNumber: registerDTO.phoneNumber,
            message: registerDTO.message,
            success: registerDTO.success
        }
    }

}