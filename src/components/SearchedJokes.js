import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, createStyles } from '@material-ui/core';

import Joke from './Joke';



const useStyles = makeStyles(() => 
  createStyles({
    resultBlock: {
      position: 'absolute',
      height: '422px',
      top: '300px',
      overflow: 'scroll',
    },
    resultPropmt: {
      backgroundColor: 'grey',
      height: '25px',
    },
    jokeItem: {
      padding: '5px',
    }
  }),
);

const SearchedJokes = () => {
  const searchedJokes = useSelector(state => state.searchedJokes);
  const classes = useStyles();
  return (
    <Grid container className={classes.resultBlock}>
      <Grid item xs={12} className={classes.resultPropmt}>Found jokes given text query:</Grid>
      <Grid container >
        {
          searchedJokes.length > 0
            ? (
                searchedJokes.map(joke =>
                <Grid item xs={12} className={classes.jokeItem}>
                  <Joke key={joke.id} value={joke.value} />
                </Grid>
                )
              )
            : ''
        }
      </Grid>
    </Grid>  
  )
};

export default SearchedJokes;