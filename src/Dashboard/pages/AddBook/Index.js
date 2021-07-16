import React, { useState } from 'react';
import AddBookForm from './AddBookForm';

export default function AddBook() {
  const bookName = useState('');
  const Aurthor = useState('');
  const isbn = useState('');
  const quantity = useState(null);
  const preface = useState('');
  const imageUrl = useState('');

  const handleAdding = () => {};

  return <AddBookForm />;
}
