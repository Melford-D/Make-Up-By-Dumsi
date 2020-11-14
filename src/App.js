import React from 'react';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Services from './components/Services';
function App() {
  return (
    <div className="app">
      <>
      <Home/>
      <About/>
      <Services/>
      <Contacts/>
      </>
    </div>
  );
}

export default App;
