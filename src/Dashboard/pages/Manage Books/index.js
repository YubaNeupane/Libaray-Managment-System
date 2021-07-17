import React, { useState, useEffect } from 'react';
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
    marginTop: 100,
    marginLeft: 200,
  },
}));

export default function ManageBook() {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState('');

  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')));
  let initalBooks = JSON.parse(localStorage.getItem('books'));

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem('books')));
    initalBooks = JSON.parse(localStorage.getItem('books'));
  }, []);

  const handleSearch = () => {
    if (searchValue.length <= 1) {
      setBooks(initalBooks);
    } else {
      setBooks(
        initalBooks.filter((book) => {
          return (
            book.bookName.toLowerCase().includes(searchValue.toLowerCase()) ||
            book.aurthor.toLowerCase().includes(searchValue.toLowerCase()) ||
            book.isbn.toLowerCase().includes(searchValue.toLowerCase()) ||
            book.preface.toLowerCase().includes(searchValue.toLowerCase())
          );
        })
      );
    }
  };

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
        <Grid item xs={6} xs={6}>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
          />
        </Grid>

        <Grid item xs={12}>
          {books ? (
            <BookTable books={books} />
          ) : (
            <Typography variant="body" color="black" component="p">
              NO BOOKS FOUND
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
