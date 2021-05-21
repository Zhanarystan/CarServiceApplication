import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useLocation
  } from "react-router-dom";

import CarApplicationService from './../../service/service';
import UserContext from '../userContext';
import {useCookies} from 'react-cookie';
import AdminPage from '../adminPage/adminPage';
import NavBar from '../navBar/navBar';
import CreateUpdateCityPage from '../createUpdateCityPage/createUpdateCityPage';
import CreateUpdateMakePage from '../createUpdateMakePage/createUpdateMakePage';
import CreateUpdateModelPage from '../createUpdateModelPage/createUpdateModelPage';
import CreateUpdateCarPage from './../createUpdateCarPage/createUpdateCarPage';
import Nav from './../navBar/navBar';
import HomePage from './../homePage/homePage';
import Login from './../login/login';
import Register from './../register/register';
import UserProfile from './../userProfile/userProfile';
import CarSearchingPage from '../carSearchingPage/carSearchingPage';
import CarDetailsPage from './../carDetailsPage/carDetailsPage';
import CarPostPageWrap from '../carPostPage/carPostPage';
import MyAdsPage from '../myAdsPage/myAdsPage';


const App = () => {

    const [currentUser, setCurrentUser] = useState({id:null, email:null, firstName:null, 
        lastName:null, phoneNumber:null, roles:[]});

        
    const service = new CarApplicationService(localStorage.getItem('jwt'));
    const [changeInAdminPage, setChangeInAdminPage] = useState(null);
    useEffect(() => {
        if(localStorage.getItem('jwt')!==null){
          
        service.getCurrentUser(localStorage.getItem('jwt'))
            .then((data)=>{
              setCurrentUser(data);
              localStorage.setItem('currentUser',JSON.stringify(data));
            }).catch((data) => {
                localStorage.removeItem('jwt');
                localStorage.removeItem('currentUser');
            });
        }
    },[changeInAdminPage]);
    return(
        <>
            <UserContext.Provider value={currentUser}>
                <Router>    
                    <WrapComponents service={service} setCurrentUser={setCurrentUser} changeInAdminPage={changeInAdminPage} 
                                    setChangeInAdminPage={setChangeInAdminPage} /> 
                </Router>
            </UserContext.Provider>    
        </>       
        
    )
}

const WrapComponents = ({service,setCurrentUser,setCookieJWT,removeCookieJWT, changeInAdminPage, setChangeInAdminPage}) => {
    
    const location = useLocation();
   

    return (
        <>
            <Nav setCurrentUser={setCurrentUser} setChangeInAdminPage={setChangeInAdminPage}/>
            <Switch>
                <Route path='/admin/cars/create' exact>
                    <CreateUpdateCarPage mode={"create"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/admin/cars/:Id' exact>
                    <CreateUpdateCarPage mode={"edit"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/admin/makes/create' exact>
                    <CreateUpdateMakePage mode={"create"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/admin/makes/:Id' exact>
                    <CreateUpdateMakePage mode={"edit"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/admin/models/create' exact>
                    <CreateUpdateModelPage mode={"create"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/admin/models/:Id' exact>
                    <CreateUpdateModelPage mode={"edit"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/admin/cities/create' exact>
                    <CreateUpdateCityPage mode={"create"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/admin/cities/:Id' exact>
                    <CreateUpdateCityPage mode={"edit"} service={service}
                    setChangeInAdminPage={setChangeInAdminPage} />
                </Route>
                
                <Route path='/admin'>
                    <AdminPage service={service} changeInAdminPage={changeInAdminPage}/>
                </Route>
                <Route path='/login' exact>
                    <Login service={service} setCookieJWT={setCookieJWT} setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/register' exact>
                    <Register service={service}/>
                </Route>
                <Route path='/profile' exact>
                    <UserProfile service={service} setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/myads' exact>
                    <MyAdsPage service={service} changeInAdminPage={changeInAdminPage} />
                </Route>
                <Route path='/searching' exact>
                    <CarSearchingPage service={service}/>
                </Route>
                <Route path='/car_post' exact>
                    <CarPostPageWrap mode={"create"} service={service} setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/car_edit/:Id' exact>
                    <CarPostPageWrap mode={"edit"} service={service} setChangeInAdminPage={setChangeInAdminPage}/>
                </Route>
                <Route path='/car_details/:Id' exact>
                    <CarDetailsPage service={service}/>
                </Route>
                <Route path='/'>
                    <HomePage service={service} />
                </Route>
            </Switch>
        </>
    )
}

export default App;