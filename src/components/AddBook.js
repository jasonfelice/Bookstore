import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBook } from '../redux/books/books';
import styles from './AddBook.module.scss';

const Book = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
    category: '',
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
    <div className={styles.add_book}>
      <h3>Add New Book</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (data.title.trim() && data.title.trim()) {
            dispatch(postBook({ ...data, id: uuid() }));
            setData({
              title: '',
              author: '',
              category: '',
            });
          }
        }}
        action="#"
      >
        <input className={styles.title} placeholder="Book title" value={data.title} onChange={onChange} type="text" name="title" />
        <input placeholder="Book author" value={data.author} onChange={onChange} type="text" name="author" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default Book;
