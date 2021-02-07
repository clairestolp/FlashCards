import {
  GET_SUBJECTS,
  GET_SUBJECTS_REQUEST,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILURE,
} from "./../actionTypes";
import initialState from "./../intialState";

const subjectsReducer = (state = initialState.subjects, action) => {
  switch (action.type) {
    case GET_SUBJECTS_REQUEST:
      return { ...state, isFetching: true, error: undefined };
    case GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        subjects: action.subjects,
      };
    case GET_SUBJECTS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return { ...state };
  }
};

export default subjectsReducer;
