import React from 'react';
import styles from './PortfolioItem.css';
import PropTypes from 'prop-types';
import { usePortfolio } from '../../hooks/portfolio';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ match }) => {
  const { title, image, technology, description, github, site, contributions } = usePortfolio(match.params.title);

  const siteHtml = site ? <a href={site} target='_blank' rel='noopener noreferrer' >Site</a> : '';
  const contributionsHtml = contributions ? 
    <>
      <h2 className={styles.contributionsTitle}>Contributions</h2>
      <ul className={styles.contributionList}>
        {contributions.map((i, k) => <li key={k}>{i}</li>)}
      </ul>)
    </> : null;


  return (
    <div className={styles.PortfolioItem}>
      <div className={styles.back}>
        <Link className={styles.Link} to={'/'}>Back</Link>
      </div>
      <div className={styles.intro}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.links}>
          <a href={github} target='_blank' rel='noopener noreferrer' >GitHub</a>
          {siteHtml}
        </div>
        <p className={styles.tech}>{technology}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <img src={image}/>
      <div className={styles.contributionsContainer}>
        {contributionsHtml}
      </div>
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
