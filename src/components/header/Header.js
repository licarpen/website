import React from 'react';
import styles from './Header.css';
import NavigationBar from '../navigation/NavigationBar';

const Header = () => (
  <div className={styles.Header}>
    <NavigationBar className={styles.NavigationBar}/>
    <h1>CARPENTER CODE</h1>
    <h2>Code By Lisa Carpenter</h2>
  </div>
);

export default Header;
