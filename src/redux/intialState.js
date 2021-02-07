const initialState = {
  user: {
    id: undefined,
    name: {
      first: undefined,
      last: undefined,
    },
    email: undefined,
    isFetching: false,
    error: undefined,
  },
  subjects: {
    subjects: [],
    isFetching: false,
    error: false,
  },
};

export default initialState;
