import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './Home';
import Results from './components/Results';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/game">
          <Home />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
