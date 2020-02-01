import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({ onClick }) => (
  <div onClick={onClick}>
    <h2></h2>
    <p></p>
  </div>
);

PortfolioItem.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default PortfolioItem;
