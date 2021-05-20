import {Grid, Avatar, Container, Typography, TextField, FormControlLabel, Checkbox, Button, Link } from '@material-ui/core';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import { OutlinedFlagSharp } from '@material-ui/icons';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    
    avatar:{
        marginTop:"10px",
        marginBottom: "10px",
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', 
      },

      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    
      
}))

const Login = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    
    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const inputData = {email, password};
        auth(inputData);
    }

    async function auth(data){
        
        const response = await fetch("http://localhost:8000/auth", {
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

        if(response.status===200){
            let jwt = await response.json();
            localStorage.setItem('jwt', jwt.jwtToken);
            // props.service.getCurrentUser(localStorage.getItem('jwt'))
            //     .then(data => localStorage.setItem('currentUser', JSON.stringify(data)));
            props.setChangeInAdminPage(jwt.jwtToken);
            history.push("/");
        }

    }
    return(
        <Container maxWidth="xs">
            <Grid
                container
                alignItems="center"
                display="flex"
                flexDirection="column"
                spacing={2} 
                style={{marginTop:"80px"}}
            >   
                <Grid container direction="column" alignItems="center"> 
                        <Avatar className={classes.avatar}>
                            <ExitToAppOutlinedIcon/>
                        </Avatar>
                        <Typography variant="h5">
                            Sign in
                        </Typography>
                </Grid>
                
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined"
                                label="Email"
                                fullWidth
                                required
                                onChange={(e) => handleEmailChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined"
                                label="Password"
                                type="password"
                                fullWidth
                                required
                                onChange={(e) => handlePasswordChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="primary"/>}
                                label="Save password"
                            />
                        </Grid>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="#" variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                </form>
                
            </Grid>
            
        </Container>
    )
}

export default Login;