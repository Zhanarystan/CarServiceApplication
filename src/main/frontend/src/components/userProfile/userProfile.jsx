import { Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, {useState, useEffect} from 'react';
import UserContext from './../userContext';


const useStyles = makeStyles(theme => ({
    container:{
        marginTop:"100px",
    },
    profileAvatar:{
        width:'100%',
        heigth:'100%',
    },
    avatarWrapper:{
        width:'300px',
        height:'300px',
    },
    forms:{
        marginBottom:"80px",
    },
    submitButtons:{
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

const UserProfile = (props) => {

    return(
        <UserContext.Consumer>
            {
                (value) => {
                    return <Profile currentUser={value} service={props.service}/>
                }
            }
        </UserContext.Consumer>
    )
}

const Profile = ({currentUser, service}) => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(()=> {
        setFirstName(currentUser.firstName);
        setLastName(currentUser.lastName);
        setPhoneNumber(currentUser.phoneNumber);
        setUserId(currentUser.id);
    },[currentUser.id,currentUser.firstName,currentUser.lastName,currentUser.phoneNumber]);

    console.log(firstName);
    const onFirstNameChange = event => {
        setFirstName(event.target.value);
    }

    const onLastNameChange = event => {
        setLastName(event.target.value);
    }

    const onPhoneNumberChange = event => {
        setPhoneNumber(event.target.value);
    }

    const onOldPasswordChange = event => {
        setOldPassword(event.target.value);
    }

    const onPasswordChange = event => {
        setPassword(event.target.value);
    }

    const onRePasswordChange = event => {
        setRePassword(event.target.value);
    }

    const updateProfileData = event =>{
        const inputData = {email:currentUser.email,firstName, lastName, phoneNumber};
        service.addData(inputData,"update-profile")
                .then((data) => {
                    setMessage(data.message);
                    if(data.success===true){
                        alert("Successfully updated")
                    }     
                    alert(data.message);               
                })
        event.preventDefault();
    }

    const updatePassword = event =>{
        const inputData = {email:currentUser.email, oldPassword, password, rePassword};
        service.addData(inputData,"update-password")
                .then((data) => {
                    setMessage(data.message);
                    if(data.success===true){
                        alert("Password successfully updated!")
                    }
                    alert(data.message);                    
                })
                setOldPassword("");
                setPassword("");
                setRePassword("");
        event.preventDefault();
    }

    const [message, setMessage] = useState(null);
    return (
        <Grid container >
            <Grid item xs={0} sm={1}/>
            <Grid item xs={12} sm={10} className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <div className={classes.avatarWrapper}>
                            <img 
                                src={process.env.PUBLIC_URL + '/img/profile_avatar.png'} alt="" 
                                className={classes.profileAvatar}
                            />
                        </div>
                        
                        <Grid xs={9} style={{marginBottom:"30px"}}>
                            <Typography variant='h5' align='center'>{currentUser.firstName} {currentUser.lastName}</Typography>
                            <Typography variant='h6' align='center' color='primary'>{currentUser.email}</Typography>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={6}>
                        <form className={classes.forms} onSubmit={updateProfileData}>
                            <Typography variant='h5'>Profile Settings</Typography>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        variant="standard"
                                        fullWidth
                                        label="First Name"
                                        autoFocus
                                        onChange={onFirstNameChange}
                                        value={firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="lastName"
                                        variant="standard"
                                        fullWidth
                                        label="Last Name"
                                        autoFocus
                                        onChange={onLastNameChange}
                                        value={lastName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="phoneNumber"
                                        variant="standard"
                                        fullWidth
                                        label="Phone Number"
                                        autoFocus
                                        onChange={onPhoneNumberChange}
                                        value={phoneNumber}
                                    />
                                </Grid>
                               
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submitButtons}
                                >
                                    Save Changes
                                </Button>
                            </Grid>
                        </form>
                        <form onSubmit={updatePassword}>
                            <Typography variant='h5'>Password Settings</Typography>
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                        <TextField
                                            name="oldPassword"
                                            variant="standard"
                                            fullWidth
                                            label="Old Password"
                                            type='password'
                                            onChange={onOldPasswordChange}
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="newPassword"
                                            variant="standard"
                                            fullWidth
                                            label="New Password"
                                            type='password'
                                            onChange={onPasswordChange}
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="reNewPassword"
                                            variant="standard"
                                            fullWidth
                                            label="Repeat New Password"
                                            type='password'
                                            onChange={onRePasswordChange}
                                            autoFocus
                                        />
                                    </Grid>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        className={classes.submitButtons}
                                    >
                                        Save Changes
                                    </Button>
                                </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={0} sm={1}/>
        </Grid>
    )
}

export default UserProfile;