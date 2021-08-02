import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel';
import { Typography } from '@material-ui/core';
import BorrowedBookTable from './BorrowedBookTable';
import DatePicker from './DatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginLeft: 100,
    marginRight: 60,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home({ userData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {userData.isLibrarian ? (
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <DatePicker />
            </Paper>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h4">
              RECENTLY ADDED
            </Typography>
            <br />

            <Carousel />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <BorrowedBookTable />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <BorrowedBookTable />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
