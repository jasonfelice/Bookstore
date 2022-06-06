import { createStore, combineReducers } from 'react-redux';
import addRemove from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  addRemove,
  categories,
});

const store = createStore(rootReducer);

export default store;
