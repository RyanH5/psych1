import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer/articlesReducer';

const rootReducer = combineReducers({
  articles: articlesReducer
}); 

export default rootReducer;