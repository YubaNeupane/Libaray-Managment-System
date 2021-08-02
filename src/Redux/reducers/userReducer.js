import {
  manageUserConstant,
  setReturnDateConstant,
} from '../actions/constants';

const initState = {
  users: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case manageUserConstant.GET_USERS_REQUEST:
      break;

    case manageUserConstant.GET_USERS_SUCCESS:
      state = {
        ...action.payload.book,
      };
      break;

    case manageUserConstant.GET_USERS_FAILED:
      break;

    case setReturnDateConstant.SET_RETURN_DATE_REQUEST:
      break;

    case setReturnDateConstant.SET_RETURN_DATE_SUCCESS:
      break;

    case setReturnDateConstant.SET_RETURN_DATE_FAILED:
      break;
  }
  return state;
};
