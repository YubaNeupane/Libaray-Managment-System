import React,{useState, useEffect} from 'react';
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

  const [searchValue, setSearchValue] = useState('');

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));
  let initUsers = JSON.parse(localStorage.getItem('users'));

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')));
    initUsers = JSON.parse(localStorage.getItem('users'));
  }, []);

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
          {users? <UserTable users={users}/> :
          <Typography variant="body" color="black" component="p">
            NO USERS FOUND
          </Typography>}
   
          
        </Grid>
      </Grid>
    </div>
  );
}
