import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 40,
    marginTop: 20,
  },
}));

export default function CardGrid({ books }) {
  const spacing = 6;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={spacing}>
      <Grid item xs={15}>
        <Grid container justifyContent="center" spacing={spacing}>
          {books.map((book) => (
            <Grid key={book.id} item>
              <Card book={book} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
