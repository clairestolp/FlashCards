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
  decks: [],
};

export default initialState;
