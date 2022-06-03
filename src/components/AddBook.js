import React from 'react';

const Book = () => (
  <div className="add_book">
    <h3>Add New Book</h3>
    <form action="#">
      <input type="text" name="title" />
      <input type="text" name="author" />
      <input type="submit" value="Add Book" />
    </form>
  </div>
);

export default Book;
