import {
  bookAddingConstant,
  bookGettingConstant,
  editBookConstant,
  borrowBookConstant,
  lowerBookQuanityConstant,
} from '../actions/constants';

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
    case editBookConstant.EDIT_BOOK_REQUEST:
      break;
    case editBookConstant.EDIT_BOOK_SUCCESS:
      break;
    case editBookConstant.EDIT_BOOK_FAILED:
      break;

    case borrowBookConstant.BORROW_BOOK_REQUEST:
      break;
    case borrowBookConstant.BORROW_BOOK_SUCCESS:
      break;
    case borrowBookConstant.BORROW_BOOK_FAILED:
      break;

    case lowerBookQuanityConstant.LOWER_BOOK_QUANITY_REQUEST:
      break;
    case lowerBookQuanityConstant.LOWER_BOOK_QUANITY_SUCCESS:
      break;
    case lowerBookQuanityConstant.LOWER_BOOK_QUANITY_FAILED:
      break;
  }
  return state;
};
