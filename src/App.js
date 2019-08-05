import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>

     

      {/* All routes are here */}
      </BrowserRouter>

     
    </div>
  );
}

export default App;
