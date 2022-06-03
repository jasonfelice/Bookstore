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
      name: 'Books',
    },
  ];
  return (
    <>
      <header>
        <div className={styles.logo} />
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
      </header>
    </>
  );
};

export default Header;
