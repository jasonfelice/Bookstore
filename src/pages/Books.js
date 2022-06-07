import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => {
  const books = useSelector((state) => state.updateBooks);
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
