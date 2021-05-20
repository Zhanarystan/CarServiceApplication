import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const UsersContent = ({getData, changeInAdminPage}) => {
    const [users, setUsers] = useState([]);
    let history = useHistory();
    
    useEffect(() => {
        getData()
        .then((data) => {
          setUsers(data);
        })
    },[changeInAdminPage])
    
    return(
        <div className="container mt-3">
            <div className="row">
                <h2 style={{flexGrow:"0.05"}}>Users</h2>
                <button type='button' class="btn btn-primary" onClick={() => history.push('/admin/users/create') }>
                    ADD NEW
                </button>
            </div>
            <div style={{marginTop:"20px"}}>
                    <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td><Link to={`/admin/users/${user.id}`}>Details</Link></td>
                                </tr>
                            )
                        } )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersContent;