import React, { useState, useEffect } from 'react';
import jokeService from '../services/jokeService';

import { Grid, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => 
  createStyles({

  }),
);

const RandomJoke = ({category}) => {
  const [joke, setJoke] = useState(null)
  useEffect(() => {
    jokeService.getRandomJoke(category)
      .then((result) => {
        setJoke(result);
      })
      .catch(e => {
        console.log(e);
      });
  }, [category]);

  const classes = useStyles();
  return (
    <div>
      {joke 
        ? (
            <div>
              <img src={joke.icon_url} alt="joke" />
              <p>{joke.value}</p>
            </div>
          )
        : ''}
    </div>
  )
}

export default RandomJoke;
