import React from 'react';
import './App.css'
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Services from './pages/Services';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route exact path='/about'>
             <About/>
          </Route>
          <Route exact path='/services'>
             <Services/>
          </Route>
          <Route exact path='/contacts'>
             <Contacts/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
