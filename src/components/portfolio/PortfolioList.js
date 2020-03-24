import React from 'react';
import styles from './PortfolioList.css';
import { Link } from 'react-router-dom';
import { portfolioPieces } from '../../data/portfolio';

const PortfolioList = () => {
  const portfolioItemElements = portfolioPieces.map(item => (
    <li key={item.title} className={styles.card}>
      <Link className={styles.Link} to={`/${item.title}`}>
        <h2 className={styles.title}>{item.title}</h2>
        <div className={styles.imgDiv}>
          <img src={item.image}/>
        </div>
        <p className={styles.tech}>{item.technology}</p>
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

