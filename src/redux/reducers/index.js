import {combineReducers} from 'redux';

import userReducer from './user';
import decksReducer from './decks';

const rootReducer = combineReducers({
  user: userReducer,
  decks: decksReducer,
})

export default rootReducer;