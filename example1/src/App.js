import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">  
          <p>
            hello.
          </p> 
          <button class="btn btn-primary">
                  User <span class="badge badge"></span>
          </button>
      </div>
    );
  }
}

export default App;
