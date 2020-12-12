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
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Nav/>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/about'>
             <About/>
          </Route>
          <Route path='/services'>
             <Services/>
          </Route>
          <Route path='/contacts'>
             <Contacts/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
