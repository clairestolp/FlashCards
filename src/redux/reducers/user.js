import {
  UPDATE_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./../actionTypes";
import initialState from "./../intialState";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case LOGIN_REQUEST:
      return { ...state, error: undefined, isFetching: true };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, ...action.user };
    case LOGIN_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default userReducer;
