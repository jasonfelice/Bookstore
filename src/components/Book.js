import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = (props) => {
  const { title, author } = props;

  return (
    <>
      <div className={styles.book_wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <span className={styles.title}>{title}</span>
            <span className={styles.author}>{author}</span>
          </div>
          <div className={styles.actions}>
            <button type="button">Remove</button>
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
};
