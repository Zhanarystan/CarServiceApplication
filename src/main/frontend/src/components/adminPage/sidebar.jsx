import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
    let { path, url } = useRouteMatch();

    return(
        <div style={{
            width:"100%",
            height:"100vh",
            backgroundColor:"#403f3d"
        }}>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link className="nav-link" to={`/admin`}>Cities</Link>
                </li>
                <li class="nav-item">
                    <Link to={`${url}/cars`} class="nav-link">Cars</Link>
                </li>
                <li class="nav-item">
                <Link to={`${url}/users`} className="nav-link">Users</Link>
                </li>
                <li class="nav-item">
                    <Link to={`${url}/makes`} class="nav-link" >Makes</Link>
                </li>
                <li class="nav-item">
                    <Link to={`${url}/models`} class="nav-link">Models</Link>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar;