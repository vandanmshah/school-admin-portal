import React from 'react';
import { AppBar, makeStyles, Toolbar, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './index.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
const NavBar: React.FC<{}> = () => {
  const history = useHistory();
  const navigateTopage = (url: string) => history.push(url);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' onClick={() => navigateTopage('/')}>
            Home
          </Button>

          <Grid container alignItems='flex-start' justify='flex-end' direction='row'>
            <Button color='inherit' onClick={() => navigateTopage('/login')}>
              Login
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
