import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import LoginLogo from './LoginLogo.png'
import BackgroundImg2 from './BackgroundImg2.jpg'



function Copyright() {

  return (

    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        New Era Brand Management
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${BackgroundImg2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },

  form: {
    width: '75%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
    borderStyle: 'solid',
    padding: 20,
    borderRadius: 25,
    borderColor: '#5F5E5C',
    borderBottomWidth: 'thin',
    borderTopWidth: 'thin',
    borderLeftWidth: 'thin',
    borderRightWidth: 'thin',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const loginLogoStyle = {
    width:200,
    marginTop: 50,
}

export default function SignInSide() {

    const history = useHistory();

    const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={LoginLogo} style={loginLogoStyle}/>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"#2DAAD6", color:'white'}}
            className={classes.submit}
            onClick={() => {
                history.push('/Home');
            }}
          >
            Login
          </Button>
            <Grid container>
              <Grid item xs>

              
                













              </Grid>

              <Grid item>
                <Link href="#" variant="body2">
                  {"Pricing Plans"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}