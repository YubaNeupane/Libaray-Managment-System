import React, { useState } from 'react';
import AddBookForm from './AddBookForm';
import { addBook } from '../../../Redux/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddBook() {
  const [bookName, setBookName] = useState('');
  const [aurthor, setAurthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [quantity, setQuantity] = useState(null);
  const [preface, setPreface] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();

  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(str);
  }

  const handleAdding = () => {
    if (validURL(imageUrl)) {
      if (
        bookName == '' ||
        aurthor == '' ||
        isbn == '' ||
        quantity == null ||
        preface == '' ||
        imageUrl == ''
      ) {
        handleAddingCallback(
          'All input fields are required! Try Again...',
          true
        );
        return;
      }
    } else {
      handleAddingCallback('Not a valid image url!', true);
      setImageUrl('');
      return;
    }

    const data = {
      bookName,
      aurthor,
      isbn,
      quantity,
      preface,
      imageUrl,
    };
    dispatch(addBook(data, handleAddingCallback));
  };

  const handleAddingCallback = (message, isError = false) => {
    if (isError) {
      toast.error(message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setBookName('');
      setAurthor('');
      setIsbn('');
      setQuantity(null);
      setPreface('');
      setImageUrl('');
    }
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
    </div>
  );
}
