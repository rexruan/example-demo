import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';

import Navbar from './Navbar';
import SearchForm from './SearchForm';


const useStyles = makeStyles(() => 
  createStyles({
    header: {
      position: 'sticky',
      top: 0,
      background: 'grey',
      height: '100px',
      padding: '5px',
    },
    title: {
      fontSize: 'x-large',
      textAlign: 'center',
      marginTop: '10px',
      height: '30px',
    },
    headerNav: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <Grid item xs={12} className={classes.title}>
          Oneflow - FrontEnd Assignment Demo
      </Grid>
      <div className={classes.headerNav}>
        <Navbar />
        <SearchForm />
      </div>
    </Grid>
  )
};

export default Header;
