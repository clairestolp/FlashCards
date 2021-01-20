import * as actionTypes from './../actionTypes';
import initialState from './../intialState';

const decksReducer = (state = initialState.decks, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default decksReducer;