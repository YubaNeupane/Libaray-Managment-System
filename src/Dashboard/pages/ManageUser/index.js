import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../Search/SearchBar';
import UserTable from './UserTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginLeft: 200,
  },
}));

export default function ManageBook() {
  const classes = useStyles();

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
            Manage Users
          </Typography>
        </Grid>
        <Grid item xs={6} xs={6}>
          <SearchBar />
          {/* <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
          /> */}
        </Grid>

        <Grid item xs={12}>
          {/* <UserTable /> */}
          <Typography variant="body" color="black" component="p">
            NO USERS FOUND
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
