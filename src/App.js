import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
