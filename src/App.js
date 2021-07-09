import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Stars from './components/Page/Stars'
import Follow from './components/Page/Follow'
import Repository from './components/Page/Repository'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/stars"  component={Stars}/>
        <Route path="/follow"  component={Follow}/>
        <Route path="/repository"  component={Repository}/>
     </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>home</h1>
  </div>
)

export default App;
