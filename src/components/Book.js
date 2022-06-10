import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Book.module.scss';
import { deleteBook } from '../redux/books/books';

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
              className={styles.button}
              type="button"
              onClick={() => dispatch(deleteBook(id))}
            >
              Remove
            </button>
            <button type="button" className={styles.button}>Edit</button>
            <button type="button" className={styles.button}>Comment</button>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.progress_info}>
            <i className={styles.circle} />
            <div className={styles.progress}>
              <span>64%</span>
              <span>Completed</span>
            </div>
          </div>
          <div className={styles.chapter} />
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
