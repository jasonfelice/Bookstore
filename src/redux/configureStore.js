import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import updateBooks from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  updateBooks,
  categories,
});

export default createStore(
  (state, action) => rootReducer(state, action),
  applyMiddleware(thunk),
);
