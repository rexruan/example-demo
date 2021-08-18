import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import Page from '../components/Page';
import { initializeCategories } from '../reducers/categoryReducer';


const useStyles = makeStyles(() => 
  createStyles({
    categories: {
      height: '100px',
      position: 'absolute',
      top: '120px',
    },
    category: {
      textAlign: 'center',
    }
  }),
);

const Home = () => {
  const dispatch = useDispatch()
  // initialize the categories
  useEffect(() => {
    dispatch(initializeCategories())
  }, [dispatch]);
  const categories = useSelector(state => state.categories);

  const classes = useStyles();
  
  return (
    <Page>
      <Grid container className={classes.categories}>
        <Grid item xs={12} style={{ margin: '0 0 10px 15px' }}>
          Get a random joke
        </Grid>
        <Grid container>
          {categories.map(category =>
            <Grid item xs={3} key={category} className={classes.category}>
              <Link to={category}>{category}</Link>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;