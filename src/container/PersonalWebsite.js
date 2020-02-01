import React, { Component } from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import NavigationElement from '../components/navigation/NavigationElement';
import Connect from '../components/connect/Connect';
import PortfolioList from '../components/portfolio/PortfolioList';

const navigationElements = [
  { label: 'Portfolio', value: 'portfolio' },
  { label: 'Connect', value: 'Connect' },
  { label: 'Home', value: 'home' }
];

const portfolioPieces = [
  { title: 'Treks N Tents',
    image: 'url',
    technology: 'NodeJS, JS, Restful APIs, HTML5/CSS3',
    description: 'A full stack, mobile-responsive hiking and camping app built by a 6-person team in a 4-day sprint' },
  { title: 'Minesweeper No. 2',
    image: 'url',
    technology: 'Vanilla Javascript',
    description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint' },
];

export default class PersonalWebsite extends Component {
  state = {
    navigationSelection: ''
  }

  handleChange = ({ target }) => {
    this.setState({ navigationSelection: target.value  });
  }

  handleClick = ({ target }) => {
    console.log(target);
  }

  render() {
    const { navigationSelection } = this.state;

    return (
      <>
        <NavigationBar 
          name={navigationSelection}
          navigationElements={navigationElements}
          onChange={this.handleChange}
        />
        <PortfolioList portfolioItemsArray={portfolioPieces} onClick={this.handleClick} />
        <Connect />
      </>
    );
  }
}
