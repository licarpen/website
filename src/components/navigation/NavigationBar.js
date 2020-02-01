import React from 'react';
import PropTypes from 'prop-types';
import NavigationElement from './NavigationElement';

const NavigationBar = ({ navigationElements, name, onChange }) => {
  const navigationBarElements = navigationElements.map(({ label, value }) => (
    <NavigationElement key={value} label={label} value={value} name={name} onChange={onChange} />
  ));
  
  return (
    <>
      {navigationBarElements}
    </>
  );
};

NavigationBar.propTypes = {
  navigationElements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NavigationBar;
