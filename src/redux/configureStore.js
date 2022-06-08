import { configureStore } from '@reduxjs/toolkit';
import updateBooks from './books/books';
import categories from './categories/categories';

export default configureStore({
  reducer: {
    updateBooks,
    categories,
  },
});
