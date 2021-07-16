import React, { useState } from 'react';
import AddBookForm from './AddBookForm';

export default function AddBook() {
  const [bookName, setBookName] = useState('');
  const [aurthor, setAurthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [quantity, setQuantity] = useState(null);
  const [preface, setPreface] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAdding = () => {
    const data = {
      bookName,
      aurthor,
      isbn,
      quantity,
      preface,
      imageUrl,
    };
    console.log(data);
  };

  return (
    <AddBookForm
      handleAdding={handleAdding}
      bookName={bookName}
      setBookName={setBookName}
      aurthor={aurthor}
      setAurthor={setAurthor}
      isbn={isbn}
      setIsbn={setIsbn}
      quantity={quantity}
      setQuantity={setQuantity}
      preface={preface}
      setPreface={setPreface}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
    />
  );
}
