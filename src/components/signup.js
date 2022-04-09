import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import LinkMui from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './login/copyright'
import './login.css'
import { useNavigate } from 'react-router-dom'


const theme = createTheme();

const SignUp = ()=>{
  const navigate = useNavigate()

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

      async function  handleSubmit(event)  {
        event.preventDefault();

        const resp = await fetch('http://localhost:1337/api/register',{
          method: 'POST',
          headers : {
             'Content-Type' : "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })

        })
        const data = await resp.json()
         
        if(data.status === 'ok'){
          navigate('/login')
        }

        console.log(data);

      
        
        
        
      };

      

    
    


      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <div className="formgroup">
                      <input 
                      required 
                      autoFocus
                      className = "formFeilds"
                      id = "name" 
                      value = {name} 
                      onChange = {(e) => setName(e.target.value)}/>

<span className="bar"></span>
              <label>Full Name</label>
                      </div> 


                  
                    
                  </Grid>
                  
                  <Grid item xs={12}>
                  <div className="formgroup">
                  <input 
                      required 
                      autoFocus
                      className = "formFeilds"
                      id = "email" 
                      value = {email}
                      onChange = {(e)=>setEmail(e.target.value)}/>
                       <span className="bar"></span>
              <label>Email</label>
                      </div>
                   
                  </Grid>
                  <Grid item xs={12}>
                  <div className="formgroup">
                  <input 
                      required 
                      autoFocus
                      type="password"
                      className = "formFeilds"
                      id = "password" 
                      value = {password}
                      onChange = {(e)=>setPassword(e.target.value)}/>
                       <span className="bar"></span>
              <label>Password</label>
                    </div>
                  </Grid>
                  
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                </form>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      );

}

export default SignUp