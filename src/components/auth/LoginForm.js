import React, { useState , useEffect} from 'react';
import TextField from '@mui/material/TextField'; 
import StyledButton from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import API_URL from "../config";


const LogInForm = ({ navigate }) => {
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
      const storedRememberMe = localStorage.getItem('rememberedRememberMe');
      if (storedRememberMe) {
        setRememberMe(JSON.parse(storedRememberMe));
        const storedEmail = localStorage.getItem('rememberedEmail');
        const storedPassword = localStorage.getItem('rememberedPassword');
        if (storedEmail) setEmail(storedEmail);
        if (storedPassword) setPassword(storedPassword);
      }
    }, []);
    
    useEffect(() => {
      localStorage.setItem('rememberedRememberMe', JSON.stringify(rememberMe));
    }, [rememberMe]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
        }

        let response = await fetch(`${API_URL}/api/tokens`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        });

        if (response.status !== 201) {
            console.log("yay");
            navigate("/");
        } else {
            console.log("oop");
            let data = await response.json();
            window.localStorage.setItem("token", data.token);
            navigate("/");
        }
        window.location.reload();
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckboxChange = (event) => {
      setRememberMe(event.target.checked);
    };


  return ( 
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
      item
      xs={false}
      sm={14}
      md={14}
      sx={{
          display: 'block',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}
      style={{backgroundColor: '#ffffff'}}
      >
      <Box
          sx={{
          my: 10,

          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          }}
      >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography id="submit" component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
      </Box>
      <TextField
        margin="normal"
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
      />
      <FormControlLabel
        control={
        <Checkbox 
        value="remember" 
        color="primary" 
        checked={rememberMe}
        onChange={handleCheckboxChange}
        />}
        label="Remember me"
      />
      <StyledButton
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        data-cy="SignIn"
        to="/"
      >
        Sign In
      </StyledButton>
      <Grid container style={{margin: '0 auto', width: '200px'}}>
        {/* Can add this link back in once forgot password logic written */}
        {/* <Grid item xs>
          <Link href="#" variant="body2">
              Forgot password?
          </Link>
        </Grid> */}
        <Grid item>
        <Link href="/signup" variant="body2">
            {"Join the cheese party? Sign Up"}
        </Link>
        </Grid>
      </Grid>
      </Box>
      </Grid>
    </Grid>   
  )
};

export default LogInForm;


