import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu">
            <ul>
              <li> <Link to={`/pythagoras?a=12&b=9&c=15`}>Pythagoras</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/pythagoras" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
