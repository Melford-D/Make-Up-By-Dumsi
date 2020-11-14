import React from 'react';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Services from './components/Services';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main';
function App() {
  return (
    <div className="app">
      <Router>
        <Nav/>
        <Switch>
          <Route>
            <Link exact path='/'>
              <Home/>
            </Link>
          </Route>
          <Route>
            <Link path='/about'>
             <About/>
            </Link>
          </Route>
          <Route>
            <Link path='/services'>
             <Services/>
            </Link>
          </Route>
          <Route>
            <Link path='/contacts'>
             <Contacts/>
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
