import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const Book = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  return (
    <div className="add_book">
      <h3>Add New Book</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (data.title.trim() && data.title.trim()) {
            dispatch(addBook({ ...data, id: uuid() }));
          }
        }}
        action="#"
      >
        <input value={data.title} onChange={onChange} type="text" name="title" />
        <input value={data.author} onChange={onChange} type="text" name="author" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default Book;
