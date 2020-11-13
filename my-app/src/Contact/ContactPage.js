import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
 
{/*Here I'm going to redo the whole init vaules and errors so that we can get the form validation working the right way*/}
 
const ContactPage = (props) => {
  const [data, setData] = useState({
    firstName: '',
    email: '',
    message: ''
  });
  
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
 
  return (
    <div className='contact'>
        <h2>Contact Us!</h2>
        <p>Let us know what you think! In order to provide you with better service please don't heistate to give use your feedback. Thank you.</p>
      <form onSubmit={handleChange}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            name='firstName'
            type='text'
            value={data.firstName}
            placeholder='First Name'
            onChange={handleChange}
          />
         
        </div>
 
 
        <div>
          <label htmlFor='email'>
            Email
          </label>
          <input
            name='email'
            type='email'
            value={data.email}
            placeholder='email'
            onChange={handleChange}
          />
          {/*This is where I'll want to somehow to the email portion of the submit thingy*/}
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <input
            name='message'
            type='text'
            value={data.message}
            placeholder='Message'
            onChange={handleChange}
          />
        </div>
        {/* <Button type='submit'  variant='contained' color='primary'> </Button> */}
        <button type ='submit'> Submit</button>
      </form>
    </div>
  );
};
export default ContactPage