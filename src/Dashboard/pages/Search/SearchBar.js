import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { useDispatch } from 'react-redux';

import { getBook } from '../../../Redux/actions';
import RefreshIcon from '@material-ui/icons/Refresh';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar({
  setSearchValue,
  searchValue,
  handleSearch,
}) {
  const classes = useStyles();

  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const refreshData = () => {
    setLoading(true);
    dispatch(getBook());
    setTimeout(function () {
      setLoading(false);
      window.location.reload(); // you can pass true to reload function to ignore the client cache and reload from the server
    }, 2000); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Book, Aurthor, ISBN #, Preface"
        inputProps={{ 'aria-label': 'Search Book' }}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch();
        }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={(e) => handleSearch()}
      >
        <SearchIcon />
      </IconButton>

      <IconButton
        className={classes.iconButton}
        aria-label="refresh"
        onClick={(e) => refreshData()}
      >
        {isLoading ? <CircularProgress /> : <RefreshIcon />}
      </IconButton>
    </Paper>
  );
}
