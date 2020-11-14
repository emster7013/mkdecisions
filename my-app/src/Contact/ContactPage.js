import React, {useState, useEffect} from 'react';
import Amplify, {API} from 'aws-amplify';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
 
{/*Here I'm going to redo the whole init vaules and errors so that we can get the form validation working the right way*/}
const initialValues = {
	name: '',
	email: '',
	message: ''
};

const errors = {
	nameError: '',
	emailError: '',
	messageError: ''
};
const ContactPage = (props) => {
    const [formValues, setFormValues] = useState(initialValues);
    
 const handleSubmit = e => {
     e.preventDefault();
     const data = {
         body : {
        name:formValues.name,
        email:formValues.email,
        message:formValues.message
    }
}
     API.post('mkapi', '/sendemail', data)
     .then((res)=>{
         console.log(data)
     })
     setFormValues(initialValues)
 }
 const handleClear = e => {
    e.preventDefault();
    setFormValues(initialValues);
};
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
//   (if name === '' ''){
//     //Throw some kind of error
//     }else{
//     name = name.target 

  return (
    <div className='contact'>
        <h2>Contact Us!</h2>
        <p>Let us know what you think! In order to provide you with better service please don't heistate to give use your feedback. Thank you.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name='name'
            type='text'
            value={formValues.name}
            placeholder='Name'
            onChange={handleChange}
          />
         
        </div>
 
 
        <div>
          <input
            name='email'
            type='email'
            value={formValues.email}
            placeholder='email'
            onChange={handleChange}
          />
          {/*This is where I'll want to somehow to the email portion of the submit thingy*/}
        </div>
        <div>
          <input
            name='message'
            type='text'
            value={formValues.message}
            placeholder='Message'
            onChange={handleChange}
          />
        </div>
        {/* <Button type='submit'  variant='contained' color='primary'> </Button> */}
        <button type ='submit' onClick={handleSubmit}> Submit</button>
      </form>
    </div>
  );
};
export default ContactPage