import React from 'react';
import styles from './Header.css';
import NavigationBar from '../navigation/NavigationBar';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className={styles.Header}>
    <NavigationBar className={styles.NavigationBar}/>
    <Link className={styles.Link} to={'/'}>
      <h1>CARPENTER CODE</h1>
      <h2>Code By Lisa Carpenter</h2>
    </Link>
  </div>
);

export default Header;
