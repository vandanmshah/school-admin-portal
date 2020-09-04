import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const useForm = (initialValues: any) => {
  console.log('IN USERFORM FUNCTION', initialValues);
  const [values, setValues] = useState(initialValues);

  // use to update state onchange of email and password
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

export const Form = (props: any) => {
  console.log('IN Form FUNCTION', props.children);

  const useStyle = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width: '30%',
        margin: theme.spacing(1),
        textAlign: 'center',
      },
    },
    submitButton: {
      margin: '10px',
    },
  }));

  const classes = useStyle();

  return <form className={classes.root}>{props.children}</form>;
};

