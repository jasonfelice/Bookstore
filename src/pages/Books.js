import React from 'react';
import Header from '../components/Header';
import AddBook from '../components/AddBook';

const Books = () => (
  <>
    <Header />
    <section className="home">
      <div className="books_wrapper" />
      <AddBook />
    </section>
  </>
);

export default Books;
