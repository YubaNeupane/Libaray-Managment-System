import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  ImageStyle: {
    maxWidth: 430,
    minWidth: 430,
    maxHeight: 500,
  },
}));

export default function Layout({ book }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={book.imageUrl} className={classes.ImageStyle} />
            <Typography>{book.bookName}</Typography>
            <Typography>By: {book.aurthor}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{book.preface}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          ISBN #<Paper className={classes.paper}>{book.isbn}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          Quantity
          <Paper className={classes.paper}>{book.quantity}</Paper>
        </Grid>
        <Grid item xs={12}>
          Return Date
          <Paper className={classes.paper}>
            <Typography color="textPrimary">
              {JSON.parse(localStorage.getItem('returnDate')).returnDate}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
