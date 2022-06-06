import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();

  return (
    <div className="add_book">
      <h3>Add New Book</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook());
        }}
        action="#"
      >
        <input type="text" name="title" />
        <input type="text" name="author" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default Book;
