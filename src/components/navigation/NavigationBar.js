import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.css';

const NavigationBar = () => {
  
  return (
    <div className={styles.NavigationBar}>
      <NavLink exact to='/' activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}>
        Home
      </NavLink>
      <NavLink exact to='/about' activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}>
        About
      </NavLink>
      <NavLink exact to='/connect' activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}>
        Connect
      </NavLink>
    </div>
  );
};

export default NavigationBar;
