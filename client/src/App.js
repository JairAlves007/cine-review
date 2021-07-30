import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navegacao from './components/Navegacao';
import Home from './components/Home';
import ShowReviews from './components/ShowReviews';
import InsertReview from './components/InsertReview';

import './style/reset.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navegacao />

          <Switch>
            
            <Route exact path = '/'>
              <Home />
            </Route>
            
            <Route path = '/api/get'>
              <ShowReviews />
            </Route>
            
            <Route path = '/api/insert'>
              <InsertReview />
            </Route>
          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;