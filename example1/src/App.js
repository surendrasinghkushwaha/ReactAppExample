import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  ButtonComponet from './ButtonComponent';

class App extends Component {
  render() {
    return (
      <div className="container">  
          <p>
            hello.
          </p> 
          <ButtonComponet customprop="World"> 
          </ButtonComponet>
          <hr/> 
           <ButtonComponentClickFeature customprop="clickable"> 
          </ButtonComponentClickFeature>
     </div>
    );
  }
}
class ButtonComponentClickFeature extends Component {
  handleclick(){ alert('ButtonComponentClickFeature handleclick() call');} 

  render() {
    return ( 
          <button class="btn btn-primary" onClick={this.handleclick}>
                 {this.props.customprop}  
          </button> 
    );
  }
}

export default App;
