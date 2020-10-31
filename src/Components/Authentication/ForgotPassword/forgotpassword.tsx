import React, { useState } from 'react';
import axios from 'axios';

// Components
import { Grid, TextField, makeStyles, Button, Typography } from '@material-ui/core';
import avatar from '../../../Assets/lifeline.jpg';
import { useForm, Form } from '../../Common/useForm';

// constants
import { env } from '../../../config';

const useStyle = makeStyles(() => ({
  loginData: {
    margin: '10% 0% 0% 5%',
    width: '45%',
  },
  submit: {
    'backgroundColor': '#211b4e !important',
    '&:hover': {
      backgroundColor: '#151039 !important',
    },
    'textTransform': 'initial',
    'marginTop': '8px',
  },
  link: {
    '&:hover': {
      backgroundColor: '#fff !important',
    },
    'fontSize': '18px',
    'textTransform': 'initial',
    'marginLeft': '10%',
  },
  login: {
    backgroundImage: `url(${avatar})`,
    width: '100%',
    height: '90vh',
    marginTop: '3.5px',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  },
  sideImg: {
    top: '-360px',
    left: '50%',
    width: '50%',
    position: 'relative',
    height: '100vh',
  },
}));

const initialValues = {
  email: '',
};

const ForgotPassword: React.FC<{}> = () => {
  const { values, handleInputChange } = useForm(initialValues);
  const [showSuccess, setShowSuccess] = useState(false);
  const classes = useStyle();

  // use for API call on signup
  const handleSubmit = () => {
    // API call
    const url = `${env.API_URL}forgotpassword`;

    axios
      .post(url, values)
      .then(() => {
        setShowSuccess(true);
        return true;
      })
      .catch(err => {
        throw err;
      });
  };

  return (
    <>
      <Grid container spacing={1}>
        {showSuccess ? (
          <Grid className={classes.loginData}>
            <span>
              <Typography component='h4' variant='h4'>
                Please check your email and reset your password
              </Typography>
            </span>
            <Button className={classes.link} href='/login'>
              Signin
            </Button>
          </Grid>
        ) : (
          <Grid className={classes.loginData}>
            <span>
              <Typography component='h4' variant='h4'>
                Find your account...
              </Typography>
              <br />
              <Typography component='h5' variant='h5'>
                Please enter your email address and we will send you an email to reset your password
              </Typography>
            </span>
            <Form>
              <Grid>
                <TextField label='Email' name='email' value={values.email} onChange={handleInputChange} />
              </Grid>
            </Form>
            <Button className={classes.submit} color='primary' type='submit' variant='contained' onClick={handleSubmit}>
              Send
            </Button>
            <Button className={classes.link} href='/login'>
              Signin
            </Button>
          </Grid>
        )}
        <Grid container sm={6} md={6} direction='column'>
          <div className={classes.login} />
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
