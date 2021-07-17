import { bookAddingConstant, bookGettingConstant } from '../actions/constants';

const initState = {
  bookName: '',
  aurthor: '',
  isbn: '',
  quantity: null,
  preface: '',
  imageUrl: '',
  error: null,
  adding: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case bookAddingConstant.ADDING_BOOK_REQUEST:
      state = {
        ...state,
        adding: true,
      };
      break;

    case bookAddingConstant.ADDING_BOOK_SUCCESS:
      state = {
        ...state,
        ...action.payload.book,
        adding: false,
      };
      break;
    case bookAddingConstant.ADDING_BOOK_FAILED:
      state = {
        ...state,
        adding: false,
        error: action.payload.error,
      };
      break;
    case bookGettingConstant.GETTING_BOOK_REQUEST:
      break;
    case bookGettingConstant.GEETING_BOOK_SUCCESS:
      break;
    case bookGettingConstant.GETTING_BOOK_FAILED:
      break;
  }
  return state;
};
