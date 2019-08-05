import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';

import './App.css';
import MainContent from './containers/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <BrowserRouter>

     

      {/* All routes are here */}
      </BrowserRouter>

     
    </div>
  );
}

export default App;
