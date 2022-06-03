import React from 'react';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => (
  <>
    <Header />
    <section className="home">
      <div className="books_wrapper">
        <Book
          title="A Game of Thrones"
          author="George R. R. Martin"
        />
      </div>
      <AddBook />
    </section>
  </>
);

export default Books;
