import { portfolioPieces } from '../data/portfolio';

export const usePortfolio = title => {
  const portfolioItem = portfolioPieces.find(item => item.title === title);

  return portfolioItem;
};
