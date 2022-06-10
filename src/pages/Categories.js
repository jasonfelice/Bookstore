import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Header from '../components/Header';

const NoPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <section className="home">
        <button className="button" onClick={() => dispatch(checkStatus())} type="button">Check status</button>
      </section>
    </>
  );
};

export default NoPage;
