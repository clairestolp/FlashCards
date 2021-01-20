import * as actionTypes from './../actionTypes';
import initialState from './../intialState';

const userReducer = (state = initialState.user, action) => {
  switch(action.type){
    case actionTypes.UPDATE_USER: 
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default userReducer;