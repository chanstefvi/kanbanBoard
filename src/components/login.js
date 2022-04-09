import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './login/copyright'
import './login.css'



const theme = createTheme();

export default function SignInSide() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch('http://localhost:1337/api/login',{
      method: 'POST',
      headers : {
         'Content-Type' : "application/json"
      },
      body: JSON.stringify({
      
        email,
        password
      })

    })
    const data = await resp.json()
    // console.log(data);
    if(data.user){
      localStorage.setItem('token',data.user)
      alert('Login Successful')
      window.location.href = 'dashboard'
    }else{
      alert('Please check your username and password')
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box  sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit} >
            <div className="formgroup">
            <input  required 
                      autoFocus
                      type="email"
                      className = "formField"
                      id = "email" 
                      value = {email}
                      onChange = {(e)=>setEmail(e.target.value)}
                      />
                 <span className="bar"></span>
              <label>Email</label>
             </div>
             <div className="formgroup">
            <input   type="password"
                      required 
                      autoFocus
                      className = "formField"
                      id = "password" 
                      value = {password}
                      onChange = {(e)=>setPassword(e.target.value)}    
                   />
            <span className="bar"></span>
            <label>Password</label>
                
                </div>
              
                
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              </form>
              {/* <div className="formgroup">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              </div> */}
              <Grid container>
                <Grid item xs>
                  <LinkMui href="#" variant="body2">
                    Forgot password?
                  </LinkMui>
                </Grid>
                <Grid item>
                  <Link to="/signup" >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}