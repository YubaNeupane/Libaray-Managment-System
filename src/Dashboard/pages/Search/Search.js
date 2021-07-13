import React from 'react';
import './Search.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
  },
}));

export default function Search() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <SearchBar />
    </main>
  );
}
