import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({ portfolioItemDetail, portfolioItemsArray, onClick }) => {

  if(!portfolioItemDetail){
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
  }
  else {
    const { title, image, technology, description } = portfolioItemsArray.find(item => item.title === portfolioItemDetail);
    return (
      <div title={title}>
        <h2>{title}</h2>
        <img src={image}/>
        <p>{technology}</p>
        <p>{description}</p>
        <button onClick={() => onClick('')}>Return</button>
      </div>
    );
  }

};

PortfolioList.propTypes = {
  onClick: PropTypes.func.isRequired,
  portfolioItemDetail: PropTypes.string.isRequired,
  portfolioItemsArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default PortfolioList;

