import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BookTable from './bookTable';
import { Divider } from '@material-ui/core';
import SearchBar from '../Search/SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 200,
    marginLeft: 200,
  },
}));

export default function ManageBook() {
  const classes = useStyles();
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')));

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography component="h3" variant="h3">
            Manage Books
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <BookTable books={books} />
        </Grid>
      </Grid>
    </div>
  );
}
