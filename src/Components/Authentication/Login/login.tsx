import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Components
import { Grid, TextField, makeStyles, Button, Typography, Link } from '@material-ui/core';
import avatar from '../../../Assets/lifeline.jpg';
import { useForm, Form } from '../../Common/useForm';

// constants
import { env } from '../../../config';

import './login.css';

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
    'marginTop': '5px',
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
  password: '',
};

const Login: React.FC<{}> = () => {
  const history = useHistory();

  const { values, handleInputChange } = useForm(initialValues);
  const classes = useStyle();

  // use for API call on submit
  const handleSubmit = () => {
    // API call
    const url = `${env.API_URL}signin`;

    axios
      .post(url, values)
      .then(() => {
        return history.push('/dashboard');
      })
      .catch(err => {
        throw err;
      });
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid className={classes.loginData}>
          <span>
            <Typography component='h5' variant='h5'>
              Enter Login Details below...
            </Typography>
          </span>
          <Form>
            <Grid>
              <TextField label='Email' name='email' value={values.email} onChange={handleInputChange} />
            </Grid>
            <Grid>
              <TextField label='Password' name='password' value={values.password} onChange={handleInputChange} />
            </Grid>
          </Form>
          <Button className={classes.submit} color='primary' type='submit' variant='contained' onClick={handleSubmit}>
            Submit
          </Button>
          <Link className={classes.link} href='/forgot'>
            Forgot Password?
          </Link>
        </Grid>
        <Grid container sm={6} md={6} direction='column'>
          <div className={classes.login} />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
