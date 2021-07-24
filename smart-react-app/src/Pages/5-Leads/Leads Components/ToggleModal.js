import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import '../Leads Components/LeadComponents.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import GenButton from '../../../Components/Buttons/GenButton'

export default function ToggleModal() {

     {/* Toggle Code */}

    const IOSSwitch = withStyles((theme) => ({
        root: {
          width: 150,
          height: 35,
          padding: 3,
          margin: theme.spacing(1),
          marginLeft:11,
          
        },
        switchBase: {
          padding: 1,
          '&$checked': {
            transform: 'translateX(117px)',
            color: 'grey',
            '& + $track': {
              backgroundColor: '#52d869',
              opacity: 1,
              border: 'none',
            },
          },
          '&$focusVisible $thumb': {
            color: 'grey',
            border: '6px solid #fff',
          },
        },
        thumb: {
          width: 32,
          height: 32,
        },
        track: {
          borderRadius: 28 / 2,
          border: `1px solid ${theme.palette.grey[500]}`,
          backgroundColor: 'grey',
          opacity: 1,
          transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
      }))(({ classes, ...props }) => {
        return (
          <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            {...props}
          />
        );
      });
    
      const [state, setState] = React.useState({    checkedB: false,            
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked }); 
      };

    {/* Modal Pop up code */}

      const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          marginLeft:50,
          marginRight:50,
        },
      }));
      
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
      
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        const closeBtnStyle = {
          marginLeft:150,
        }

    return(
        <>
            <FormControlLabel
            control={<IOSSwitch  checked={state.checkedB} onChange={handleChange} name="checkedB"
            onClick={handleOpen}                  
            />}
        />

<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
                Terms and Conditions
            </h2>
            <hr />
            <p id="transition-modal-description">
                Unless permitted by law, no Personal Information is collected without first obtaining your consent. By providing Personal Information to (Client Name), you agree and consent that we may collect, use and disclose your Personal information in accordance with this Privacy Policy. In addition, where appropriate, specific authorization or consents may be obtained from time to time.
                {<br />}{<br />}
                In most cases and subject to legal restrictions, you are free to refuse or withdraw your consent at any time upon reasonable and advanced notice. For example, you may always opt-out. It should be noted that in certain circumstances, we may only be able to respond to your inquiry if you provide Personal Information to (Client Name).
                {<br />}{<br />}
                Consequently, if you choose to not provide us with any required Personal information, we may not be able to respond to your inquiry. We will inform you of the consequences should you wish to withold or withdraw your request.
                {<br />}{<br />}
                if you are not satisfied with the acces to Personal Information with which we have provide you or if you have other questions or concerns, pleas call the(Client Name) Customer Support Centre at (tel number).
            </p>
            <div style={{marginLeft:'43%'}}>
                <GenButton 
                    value="Close"
                    onClick={handleClose}
                />
            </div>
            
          </div>
        </Fade>
      </Modal>
    </>
    )
}