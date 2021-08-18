import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => 
  createStyles({
    footer: {
      background: 'orange',
      height: '40px',
      position: 'absolute',
      bottom: 0,      
    },
    footerItem: {
      textAlign: 'center',
    }
  }),
);

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12} className={classes.footerItem}>Created by Rex Ruan</Grid>
      <Grid item xs={12} className={classes.footerItem}>2021-08-16</Grid>
    </Grid>
  )
};

export default Footer;
