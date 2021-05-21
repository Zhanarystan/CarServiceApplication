import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import UserContext from './../userContext';

const Nav = (props) => {
 
    return(
          <UserContext.Consumer>
              {
                  (value) => {
                      return <NavBar currentUser={value} 
                      removeCookieJWT = {props.removeCookieJWT} 
                      setCurrentUser={props.setCurrentUser}
                      setChangeInAdminPage={props.setChangeInAdminPage}/>
                  }
              }
          </UserContext.Consumer>
    )
  }

const NavBar = ({currentUser, removeCookieJWT, setCurrentUser, setChangeInAdminPage}) => {

    let history =  useHistory();


    const Online = () => {
    
        return(
            <>
                <Link to='/myads' color='inherit' class="nav-link">My ads</Link>
                <Link to='/profile' color='inherit' class="nav-link">{currentUser.email}</Link>
                <Link href='#' color='inherit' class="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentUser({id:null, email:null, firstName:null, 
                    lastName:null, phoneNumber:null, roles:[]});
                  localStorage.removeItem('currentUser');
                  localStorage.removeItem('jwt');
                  
                  history.push("/");
                  }}
                >Logout</Link>
            </>
        )
      }
    
      const Offline = () => {
        return(
            <>
                <Link to='/login' color='inherit' class="nav-link">Login</Link>
                <Link to='/register' color='inherit' class="nav-link">Registration</Link>
            </>
        )
      }
    return(
        <nav class="navbar navbar-expand-lg">
            <div className="container" style={{backgroundColor:"white",
                                            paddingTop:'10px',
                                            paddingBottom: '10px'}}>
            <img onClick={() => {history.push("/")}} src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo' style={{width:"8%",marginRight:'30px'}}/>
            <ul class="navbar-nav mr-auto" style={{flexGrow:"1"}}>
                <li class="nav-item">
                    <Link class="nav-link" to='/searching' >Cars</Link>
                </li>
                {currentUser.roles.length===2?
                <li class="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin Panel Models
                    </a>
                    
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/admin">Cities</Link>
                    <Link class="dropdown-item" to="/admin/makes">Makes</Link>
                    <Link class="dropdown-item" to="/admin/models">Models</Link>
                    <Link class="dropdown-item" to="/admin/cars">Cars</Link>
                    <Link class="dropdown-item" to="/admin/users">Users</Link>
                    </div>
                    
                </li>
                :null}
            </ul>
            {currentUser.email!==null?<Online/>:<Offline/>}
            </div>
            
        </nav>
    )
}

export default Nav;