import './App.css';
import Squad from './containers/Squad';
import Header from './components/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Teams from './containers/Teams'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Squad />
        </div>
      </Router>
    </div>
  );
}

export default App;
