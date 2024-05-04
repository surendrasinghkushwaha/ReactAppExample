import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import { Home } from './Components/Home';
import {Contact }from './Components/Contact';
import {About } from './Components/About';
function App() {
  
  return (<BrowserRouter>
    <div>
      <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
        <li><Link to={'/about'} className="nav-link">About</Link></li>
      </ul>
      </nav>
      <hr /> <Routes>
          <Route   path='/' Component={Home} />
          <Route path='/contact' Component={Contact} />
          <Route path='/about' Component={About} />
       </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
