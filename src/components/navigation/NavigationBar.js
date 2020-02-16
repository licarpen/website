import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from '../../hooks/navigation';

const NavigationBar = () => {
  const { navigationSelection, handleChange } = useNavigation();
  console.log(navigationSelection);
  
  return (
    <>
      <Link to='/'>
        <input id='home' type="radio" name='nav' value='home' checked={navigationSelection === 'home'} onChange={handleChange} />
        <label htmlFor='home'>Home</label>
      </Link>
      <Link to='/portfolio'>
        <input id='portfolio' type="radio" name='nav' value='portfolio' checked={navigationSelection === 'portfolio'} onChange={handleChange} />
        <label htmlFor='portfolio'>Portfolio</label>
      </Link>
      <Link to='/connect'>
        <input id='connect' type="radio" name='nav' value='connect' checked={navigationSelection === 'connect'} onChange={handleChange} />
        <label htmlFor='connect'>Connect</label>
      </Link>
    </>
  );
};

export default NavigationBar;
