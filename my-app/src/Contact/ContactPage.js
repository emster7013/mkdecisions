import React, {useState} from 'react';
import Amplify, {API} from 'aws-amplify';
import {Button, Grid, TextField, Typography, Dialog} from '@material-ui/core';
import 'fontsource-roboto';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 
{/*Here I'm going to redo the whole init vaules and errors so that we can get the form validation working the right way*/}
const initialValues = {
	name: '',
	email: '',
    message: ''
};

const ContactPage = (props) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault();

    API.post('mkapi', '/sendemail',{
        body: {
       name:formValues.name,
       email:formValues.email,
       message:formValues.message
              }})
              .then((res)=>{
        console.log(res)
       })
       setFormValues(initialValues)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
   
  };

//   if (formValues.name === ''){
//     alert( "Please provide your name!" );
//     } return formValues.name = true

  return (
    <Grid>
        <h3>Contact Us!</h3>
        <Typography>Let us know what you think! In order to provide you with better service please don't heistate to give use your feedback. Thank you.</Typography>
      <ValidatorForm onSubmit={handleClose} >
        <Grid container direction="column" justify="space-evenly" alignItems="center">
          <TextField
          id='standard'
            name='name'
            type='text'
            value={formValues.name}
            placeholder='Name'
            onChange={handleChange}
          />
         <div style={{fontsize:10, color:'red'}}>{props.nameError}</div>
         
        </Grid>

        <Grid item>
          <TextValidator
          id='standard'
            name='email'
            type='email'
            value={formValues.email}
            placeholder='Email'
            onChange={handleChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']} 
          />
        </Grid>
        <Grid item>
          <TextField
          id='standard'
            name='message'
            type='text'
            value={formValues.message}
            placeholder='Message'
            onChange={handleChange}
          />
        </Grid>
        {/* <Button type='submit'  variant='contained' color='primary'> </Button> */}
        
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Send Message
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to send the message?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is letting you know that you will be sending a message, if you'd like to decline please click no thanks.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Send Message
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No Thanks
          </Button>
        </DialogActions>
      </Dialog>
      </ValidatorForm>
    
    </Grid>
  );
};
export default ContactPage