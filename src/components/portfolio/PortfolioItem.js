import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = () => (
  <div onClick={() => onClick(portfolioItem.title)} title={portfolioItem.title}>
    <h2>{portfolioItem.title}</h2>
    <img src={portfolioItem.image}/>
  </div>

<h2>{portfolioItem.title}</h2>
<img src={portfolioItem.image}/>


export default PortfolioItem;
