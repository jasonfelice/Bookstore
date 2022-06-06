import { combineReducers } from 'redux';
import addRemove from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  addRemove,
  categories,
});
