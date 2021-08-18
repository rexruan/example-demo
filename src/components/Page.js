import React from 'react';
import { Grid, makeStyles, createStyles} from '@material-ui/core';

import Footer from './Footer';
import Header from './header/Header';
import SearchedJokes from './SearchedJokes';

const useStyles = makeStyles(() => 
  createStyles({
    page: {
      minHeight: '100vh',
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 'solid',
      position: 'relative',
    },
  }),
);

const Page = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.page}>
      <Header />
      {props.children}
      <SearchedJokes />
      <Footer />
    </Grid>
  );
};

export default Page;