import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigation } from '../../hooks/navigation';

const NavigationBar = () => {
  const { handleChange } = useNavigation();
  
  return (
    <>
      <NavLink exact to='/' activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}>
        <input id='home' type="radio" name='nav' value='home' onChange={handleChange} />
        <label htmlFor='home'>Home</label>
      </NavLink>
      <NavLink to='/portfolio' activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}>
        <input id='portfolio' type="radio" name='nav' value='portfolio'  onChange={handleChange} />
        <label htmlFor='portfolio'>Portfolio</label>
      </NavLink>
      <NavLink to='/connect' activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}>
        <input id='connect' type="radio" name='nav' value='connect'  onChange={handleChange} />
        <label htmlFor='connect'>Connect</label>
      </NavLink>
    </>
  );
};

export default NavigationBar;
