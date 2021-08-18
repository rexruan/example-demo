import React from "react";
import { useParams } from 'react-router-dom';
import { Grid, createStyles, makeStyles } from "@material-ui/core";
import Page from "../components/Page";
import RandomJoke from '../components/RandomJoke';



const useStyles = makeStyles(() => 
  createStyles({
    jokeBlock: {
      position: 'absolute',
      top: '120px',
      padding: '15px',
    },
  }),
);

const Category = () => {
  const { category } = useParams();

  const classes = useStyles();
  return (
    <Page>
      <Grid container className={classes.jokeBlock}>
        <Grid item xs={12}>
          Picked category: {category}
        </Grid>
        <Grid item xs={12}>
          Content: <RandomJoke category={category} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Category;
