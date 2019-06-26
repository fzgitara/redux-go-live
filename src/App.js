import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoLive from './views/go_live/container';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div>
        <Link to="/go_live">
          <h2>GO LIVE</h2>
        </Link>
      </div>
      <Route path="/go_live" component={GoLive}/>
    </Router>
  );
}

export default App;
