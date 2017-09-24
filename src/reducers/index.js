import { combineReducers } from 'redux';

// we are assigning reducer to the alias formReducer
// this is to prevent errors if we are to import something called reducer
import {reducer as formReducer} from 'redux-form'

import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
