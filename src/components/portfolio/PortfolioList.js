import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioList = (portfolioItemsArray) => {
  const portfolioItemElements = portfolioItemsArray.map(item => (
    <li key={item.title}>
      <Link to={`/portfolio/${item.title}`}>
        <h2>{item.title}</h2>
        <img src={item.image}/>
      </Link>
    </li>
    
  ));

  return (
    <ul>
      {portfolioItemElements}
    </ul>
  );
};

export default PortfolioList;

