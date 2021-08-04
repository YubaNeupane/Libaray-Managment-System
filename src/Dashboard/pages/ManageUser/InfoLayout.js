import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import BorrowedBookTable from '../Home/BorrowedBookTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoLayout({ user }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" component="h2" color="textPrimary">
              {user.firstName + ' ' + user.lastName}
            </Typography>
            <Typography variant="h5" component="h5" color="textSecondary">
              Email: {user.email}
            </Typography>
            <Typography variant="h6" component="h6" color="textSecondary">
              Account Created:{' '}
              {new Date(user.createdAt.seconds * 1000).toLocaleString(
                'default'
              )}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5" color="textSecondary">
              Currently Borrowing
            </Typography>
            <br></br>
            <BorrowedBookTable userData={user} isLibrarian={true} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5" color="textSecondary">
              Currently Reserving
            </Typography>
            <br></br>
            <BorrowedBookTable userData={user} isLibrarian={true} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
