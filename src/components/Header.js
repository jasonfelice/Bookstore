import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

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
          <a href="/#" className={styles.logo}>Bookstore</a>
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
