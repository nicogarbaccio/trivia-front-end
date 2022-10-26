import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import GamePage from './GamePage';
import Results from './components/Results';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <GamePage />
        </Route>
        <Route exact path="/game">
          <GamePage />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
