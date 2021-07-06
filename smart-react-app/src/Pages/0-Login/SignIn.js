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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom'
import LoginLogo from './LoginLogo.png'
import BackgroundImg2 from './BackgroundImg2.jpg'



function Copyright() {

  return (
    //Copyright text under login//
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
{/* In-Component Styles go here */}
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
    width: '75%',
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

  {/* Push to home on login */}
    const history = useHistory();
    const classes = useStyles();
  
  {/* Forgot Password Dialog open/close */}
  const [FPOpen, setFPOpen] = React.useState(false);

  const ForgotPassOpen = () => {setFPOpen(true); };
  const ForgotPassClose = () => {setFPOpen(false); };

  {/* Trial Account creation Dialog open/close */}
  const [TAOpen, setTAOpen] = React.useState(false);

  const TrialAccOpen = () => {setTAOpen(true); };
  const TrialAccClose = () => {setTAOpen(false); };


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
                <Link href="#" variant="body2" onClick={ForgotPassOpen}>
                    {"Forgot Password?"}
                  </Link>
                  {/* Forgot Password Popup Dialog Content */}
                      <Dialog open={FPOpen} onClose={ForgotPassClose}>
                        <DialogTitle>Forgot Password?</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Please enter your Username below and we will send a reset to you shortly.
                          </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="Username"
                              label="Username"
                              type="text"
                              fullWidth
                            />
                          </DialogContent>
                        <DialogActions>
                          <Button onClick={ForgotPassClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={ForgotPassClose} color="primary">
                            Submit
                          </Button>
                        </DialogActions>
                      </Dialog>
              </Grid>
           
              <Grid item>
              {/* Trial Account Popup Dialog Content */}
                <Link href="#" variant="body2" onClick={TrialAccOpen}>
                  {"Get Trial Account?"}
                </Link>
                      <Dialog open={TAOpen} onClose={TrialAccClose}>
                        <DialogTitle>14 Free Trial Account Setup</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            To set up a trial account, please fill in the details below. After review, you will receive the details for intitial login via email.
                          </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="FullName"
                              label="Full Name"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="Email"
                              label="Email"
                              type="email"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="ContactNumber"
                              label="Contact Number"
                              type="tel"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="BusinessName"
                              label="BusinessName"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="BusinessType"
                              label="Business Type"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="NumOfStores"
                              label="Number of Stores"
                              type="number"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="AnnualTurnover"
                              label="Annual Turnover in ZAR"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="Password"
                              label="Password"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="ConfirmPassword"
                              label="Confirm Password"
                              type="text"
                              fullWidth
                            />
                          </DialogContent>
                        <DialogActions>
                          <Button onClick={TrialAccClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={TrialAccClose} color="primary">
                            Submit
                          </Button>
                        </DialogActions>
                      </Dialog>

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