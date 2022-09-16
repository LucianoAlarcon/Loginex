import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.appName}>
        <div className={styles.userContainer}>
          <li>
            <a href='/login'>Login</a>
            <a href='/home'>Home</a>
          </li>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
