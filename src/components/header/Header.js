import React from 'react';
import styles from './Header.css';
import NavigationBar from '../navigation/NavigationBar';

const Header = () => (
  <div className={styles.Header}>
    <h1>CARPENTER CODE</h1>
    <h2>Code By Lisa Carpenter</h2>
    <NavigationBar />
  </div>
);

export default Header;
