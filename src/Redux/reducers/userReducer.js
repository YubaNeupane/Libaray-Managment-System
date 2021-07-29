import { manageUserConstant } from "../actions/constants";

const initState = {
    users:null
};

export default (state = initState, action) => {
    switch (action.type) {
        case manageUserConstant.GET_USERS_REQUEST:
          break
           
        case manageUserConstant.GET_USERS_SUCCESS:
            state ={
                ...action.payload.book
            }

        case manageUserConstant.GET_USERS_FAILED:
            break;
    }
    return state;
  };