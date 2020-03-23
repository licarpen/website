import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.css';

const NavigationBar = () => {
  
  return (
    <div className={styles.NavigationBar}>
      <NavLink className={styles.NavLink} exact to='/'>
        Home
      </NavLink>
      <NavLink className={styles.NavLink} exact to='/about'>
        About
      </NavLink>
      <NavLink className={styles.NavLink} exact to='/connect'>
        Connect
      </NavLink>
    </div>
  );
};

export default NavigationBar;
