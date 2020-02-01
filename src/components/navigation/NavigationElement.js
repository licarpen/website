import React from 'react';
import PropTypes from 'prop-types';
//import styles from './Navigation.css';

const NavigationElement = ({ name, label, value, onChange }) => (
  <div>
    <input id={value} type="radio" name={name} value={value} checked={name === value} onChange={onChange} />
    <label htmlFor={value}>{label}</label>
  </div>
);

NavigationElement.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NavigationElement;
