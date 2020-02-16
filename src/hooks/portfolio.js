export const portfolioPieces = [
  { title: 'Treks N Tents',
    image: 'url',
    technology: 'NodeJS, JS, Restful APIs, HTML5/CSS3',
    description: 'A full stack, mobile-responsive hiking and camping app built by a 6-person team in a 4-day sprint' },
  { title: 'Minesweeper No. 2',
    image: 'url',
    technology: 'Vanilla Javascript',
    description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint' },
];

export const usePortfolio = title => {
  const portfolioItem = portfolioPieces.find(item => item.title === title);

  return portfolioItem;
};
