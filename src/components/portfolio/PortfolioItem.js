import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({ portfolioItem, onClick }) => (
  <div onClick={() => onClick(portfolioItem.title)} title={portfolioItem.title}>
    <h2>{portfolioItem.title}</h2>
    <img src={portfolioItem.image}/>
  </div>
);

PortfolioItem.propTypes = {
  portfolioItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default PortfolioItem;
