import React from 'react';
import { shallow } from 'enzyme';
import PortfolioList from './PortfolioList';

describe('PortfolioList component', () => {
  it('matches a snapshot when no portfolio piece has been clicked', () => {
    const portfolioItemsArray = [
      { title: 'Treks N Tents',
        image: 'url',
        technology: 'NodeJS, JS, Restful APIs, HTML5/CSS3',
        description: 'A full stack, mobile-responsive hiking and camping app built by a 6-person team in a 4-day sprint' },
      { title: 'Minesweeper No. 2',
        image: 'url',
        technology: 'Vanilla Javascript',
        description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint' },
    ];
    const wrapper = shallow(<PortfolioList portfolioItemDetail='' portfolioItemsArray={portfolioItemsArray}onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('matches a snapshot when a single portfolio item has been clicked and is displayed', () => {
    const portfolioItemsArray = [
      { title: 'Treks N Tents',
        image: 'url',
        technology: 'NodeJS, JS, Restful APIs, HTML5/CSS3',
        description: 'A full stack, mobile-responsive hiking and camping app built by a 6-person team in a 4-day sprint' },
      { title: 'Minesweeper No. 2',
        image: 'url',
        technology: 'Vanilla Javascript',
        description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint' },
    ];
    const wrapper = shallow(<PortfolioList portfolioItemDetail='Treks N Tents' portfolioItemsArray={portfolioItemsArray}onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
