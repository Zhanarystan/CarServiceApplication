import React,{useState,useEffect} from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import CitiesContent from './citiesContent';
import Sidebar from './sidebar';
import MakesContent from './makesContent';
import ModelsContent from './modelsContent';
import CarsContent from './carsContent';
import UsersContent from './usersContent';


const AdminPage = ({service,changeInAdminPage}) =>{
    let match = useRouteMatch();
    return (
        
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <Switch>
                        <Route path={`${match.path}/cars`}>
                            <CarsContent getData={service.getAllCars}
                            changeInAdminPage={changeInAdminPage}/>
                        </Route>
                        <Route path={`${match.path}/makes`}>
                            <MakesContent getData={service.getAllMakes}
                            changeInAdminPage={changeInAdminPage}/>
                        </Route>
                        <Route path={`${match.path}/users`}>
                            <UsersContent getData={service.getAllUsers}
                            changeInAdminPage={changeInAdminPage}/>
                        </Route>
                        <Route path={`${match.path}/models`}>
                            <ModelsContent getData={service.getAllModels}
                            changeInAdminPage={changeInAdminPage}/>
                        </Route>
                        <Route path={`${match.path}`}>
                            <CitiesContent getData={service.getAllCities}
                            changeInAdminPage={changeInAdminPage}/>
                        </Route>
                    </Switch>
                    
                </div>
            </div>
        
    )
}

export default AdminPage;