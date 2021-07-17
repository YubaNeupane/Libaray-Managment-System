import React, { useState } from 'react';
import './Search.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import CardsGrid from './CardsGrid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
  },
}));

export default function Search() {
  const [searchValue, setSearchValue] = useState('');

  const classes = useStyles();
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')));
  const initalBooks = JSON.parse(localStorage.getItem('books'));

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
    <main className={classes.content}>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />

      {books ? (
        <CardsGrid books={books} />
      ) : (
        <Typography variant="body" color="black" component="p">
          NO BOOKS FOUND
        </Typography>
      )}
    </main>
  );
}
