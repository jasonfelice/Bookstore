import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Book.module.css';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.book_wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <span className={styles.title}>{title}</span>
            <span className={styles.author}>{author}</span>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              onClick={() => dispatch(removeBook(id))}
            >
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
