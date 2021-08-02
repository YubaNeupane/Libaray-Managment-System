import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../Search/Card';

import Grid from '@material-ui/core/Grid';

const breakPoints = [{ width: 20, itemsToShow: 4 }];

export default function Slider() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')));
  const newBook = books.sort(function (a, b) {
    return new Date(b.lastUpdated) - new Date(a.lastUpdated);
  });

  return (
    <Carousel
      breakPoints={breakPoints}
      outerSpacing={100}
      enableMouseSwipe={true}
    >
      {newBook.slice(0, 7).map((book) => (
        <Grid key={book.id} item spacing={50}>
          <Card book={book} display={true} />
        </Grid>
      ))}
    </Carousel>
  );
}
