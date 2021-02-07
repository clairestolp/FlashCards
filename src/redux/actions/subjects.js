import {
  GET_SUBJECTS,
  GET_SUBJECTS_REQUEST,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILURE,
} from "./../actionTypes";

export const getSubjects = (userId) => ({
  type: GET_SUBJECTS,
  userId,
});

export const getSubjectsRequest = () => ({
  type: GET_SUBJECTS_REQUEST,
});

export const getSubjectsSuccess = (subjects) => ({
  type: GET_SUBJECTS_SUCCESS,
  subjects,
});

export const getSubjectsFailure = (error) => ({
  type: GET_SUBJECTS_FAILURE,
  error,
});
