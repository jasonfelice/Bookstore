import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      name: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      name: 'Categories',
    },
  ];
  return (
    <>
      <header>
        <div className={styles.header}>
          <h1 className={styles.logo}>Bookstore</h1>
          <nav>
            <ul>
              {
              links.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>

              ))
            }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
