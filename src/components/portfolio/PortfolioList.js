import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioPieces } from '../../hooks/portfolio';

const PortfolioList = () => {
  const portfolioItemElements = portfolioPieces.map(item => (
    <li key={item.title}>
      <Link to={`/${item.title}`}>
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

