import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Connect from '../components/connect/Connect';
import NavigationBar from '../components/navigation/NavigationBar';
import PersonalWebsite from '../container/PersonalWebsite';

export default function App() {

  return (    
    <Router>
      <NavigationBar />
    </Router>
  );
}
