import './App.css';
import Squad from './containers/Squad';
import Header from './components/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Teams from './containers/Teams';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path='/teams'>
            <Teams />
          </Route>
          <Route path='/'>
            <Squad />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
