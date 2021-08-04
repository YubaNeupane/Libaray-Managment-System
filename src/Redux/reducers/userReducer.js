import {
  manageUserConstant,
  setReturnDateConstant,
  editUserDataConstant,
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

    case editUserDataConstant.EDIT_USER_SUCCESS:
      break;

    case editUserDataConstant.EDIT_USER_FAILED:
      break;

    case editUserDataConstant.EDIT_USER_REQUEST:
      break;
  }
  return state;
};
