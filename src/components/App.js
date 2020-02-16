import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Connect from '../components/connect/Connect';
import NavigationBar from '../components/navigation/NavigationBar';
import PortfolioItem from '../components/portfolio/PortfolioItem';
import PortfolioList from '../components/portfolio/PortfolioList';

export default function App() {

  return (    
    <Router>
      <NavigationBar />
      <Route exact path='/portfolio' component={PortfolioList}/>
      <Route path='/portfolio/:title' component={PortfolioItem} />
    </Router>
  );
}
