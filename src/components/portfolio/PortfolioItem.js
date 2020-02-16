import React from 'react';
import PropTypes from 'prop-types';
import { usePortfolio } from '../../hooks/portfolio';

const PortfolioItem = ({ match }) => {
  const { title, image, technology, description } = usePortfolio(match.params.title);

  return (
    <div>
      <h2>{title}</h2>
      <img src={image}/>
      <p>Technologies: {technology}</p>
      <p>{description}</p>
    </div>
  );
};

PortfolioItem.propTypes = { 
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PortfolioItem;
