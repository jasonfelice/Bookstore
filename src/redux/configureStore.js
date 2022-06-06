import { createStore } from 'react-redux';
import { combineReducers } from 'redux';
import addRemove from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  addRemove,
  categories,
});

const store = createStore(rootReducer);

export default store;
