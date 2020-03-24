import React from 'react';
import styles from './PortfolioItem.css';
import PropTypes from 'prop-types';
import { usePortfolio } from '../../hooks/portfolio';

const PortfolioItem = ({ match }) => {
  const { title, image, technology, description, github, site, contributions } = usePortfolio(match.params.title);

  const siteHtml = site ? <a href={site} target='_blank' rel='noopener noreferrer' >Site</a> : '';
  const contributionsHtml = contributions.map((i, k) => <li key={k}>{i}</li>);

  return (
    <div className={styles.PortfolioItem}>
      <h2>{title}</h2>
      <div className={styles.links}>
        <a href={github} target='_blank' rel='noopener noreferrer' >GitHub</a>
        {siteHtml}
      </div>
      <img src={image}/>
      <p className={styles.tech}>{technology}</p>
      <p className={styles.description}>{description}</p>
      <h2 className={styles.contributionsTitle}>Contributions</h2>
      <ul className={styles.contributionList}>
        {contributionsHtml}
      </ul>
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
