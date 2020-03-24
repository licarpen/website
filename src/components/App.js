import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import Connect from '../components/connect/Connect';
import About from '../components/about/About';
import PortfolioItem from '../components/portfolio/PortfolioItem';
import PortfolioList from '../components/portfolio/PortfolioList';
import './App.css';

export default function App() {

  return (    
    <>
      <Router>
        <Header />
        <Route exact path='/' component={PortfolioList}/>
        <Switch>
          <Route path='/connect' component={Connect} />
          <Route path='/about' component={About} />
          <Route path='/:title' component={PortfolioItem} />
        </Switch>
      </Router>
    </>
  );
}
