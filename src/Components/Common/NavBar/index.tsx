import React from 'react';
import { AppBar, makeStyles, Toolbar, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './index.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    background: '#ffffff',
    color: '#3f51b5',
    padding: '10px',
  },
  button: {
    marginRight: '3px',
  },
}));
const NavBar: React.FC<{}> = () => {
  const history = useHistory();
  const navigateTopage = (url: string) => history.push(url);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <span>Welcome to school management application </span>
        <Toolbar>
          <Button color='inherit' className={classes.button} onClick={() => navigateTopage('/')}>
            Home
          </Button>
          <Button color='inherit' className={classes.button} onClick={() => navigateTopage('/about')}>
            About
          </Button>
          <Button color='inherit' className={classes.button} onClick={() => navigateTopage('/')}>
            features
          </Button>
          <Grid container alignItems='flex-start' justify='flex-end' direction='row'>
            <Button color='inherit' onClick={() => navigateTopage('/login')}>
              Login
            </Button>
            <Button color='inherit' onClick={() => navigateTopage('/signup')}>
              Signup
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
