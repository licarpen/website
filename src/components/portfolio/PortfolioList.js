import React from 'react';
import styles from './PortfolioList.css';
import { Link } from 'react-router-dom';
import { portfolioPieces } from '../../hooks/portfolio';

const PortfolioList = () => {
  const portfolioItemElements = portfolioPieces.map(item => (
    <li key={item.title} className={styles.card}>
      <Link className={styles.Link} to={`/${item.title}`}>
        <h2>{item.title}</h2>
        <img src={item.image}/>
        <p>{item.technology}</p>
      </Link>
    </li>
    
  ));

  return (
    <ul className={styles.PortfolioList}>
      {portfolioItemElements}
    </ul>
  );
};

export default PortfolioList;

