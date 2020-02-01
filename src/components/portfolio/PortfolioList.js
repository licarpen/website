import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({ portfolioItemsArray, onClick }) => {
  const portfolioItemElements = portfolioItemsArray.map(item => (
    <li key={item.title}>
      <PortfolioItem onClick={onClick} portfolioItem={item} />
    </li>
  ));

  return (
    <ul>
      {portfolioItemElements}
    </ul>
  );
};

PortfolioList.propTypes = {
  onClick: PropTypes.func.isRequired,
  portfolioItemsArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default PortfolioList;

