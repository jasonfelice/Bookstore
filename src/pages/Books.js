import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import Book from '../components/Book';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.updateBooks);

  window.onload = () => {
    dispatch(fetchBooks());
  };

  return (
    <>
      <Header />
      <section className="home">
        <div className="books_wrapper">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
        <AddBook />
      </section>
    </>
  );
};

export default Books;
