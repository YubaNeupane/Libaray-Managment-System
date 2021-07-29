import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../Search/Card';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const breakPoints = [{ width: 100, itemsToShow: 3 }];

const useStyles = makeStyles((theme) => ({
  container: {
   
  },

}));

export default function Slider() {

  const classes = useStyles();

  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')));
  const newBook = books.sort(function (a, b) {
    return new Date(b.lastUpdated) - new Date(a.lastUpdated);
  });

  return (
    <Carousel breakPoints={breakPoints}>
      {newBook.slice(0, 7).map((book) => (
        <Grid key={book.id} item spacing={100} className={classes.container} >
          <Card book={book} display={true} className={classes.container}/>
        </Grid>
      ))}
    </Carousel>
  );
}
