import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer/articlesReducer';
import sessionReducer from './sessionsReducer/sessions';
import userReducer from './usersReducer/users';

const rootReducer = combineReducers({
  articles: articlesReducer,
  sessionState: sessionReducer,
  userState: userReducer,
}); 

export default rootReducer;