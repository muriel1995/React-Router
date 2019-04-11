import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink, Link } from 'react-router-dom';
import Home from './Home';
import History from './History';

class App extends Component {
  render() {
    return (
      <div>
                <NavLink exact to="/" activeClassName="pres"> Bienvenue </NavLink>
                <NavLink to="/Notre histoire" activeClassName="selected"> History </NavLink>

        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Notre histoire" component={History} />
        </Switch>
      </div>
    );
  }
}

export default App;
