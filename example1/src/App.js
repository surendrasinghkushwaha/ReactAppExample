import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  ButtonComponet from './ButtonComponent';
import PropTypes from 'prop-types';
class App extends Component {
/*The rest of these approaches assume you’re declaring React components via ES6 classes.
     If you use an ES6 class, React no longer autobinds. One way to resolve this is to call bind in render:
      <button onChange={this.handleChange.bind(this)}> </button>
      or
      constructor(props) {
      super(props); 
      this.myHandlerEvent=this.myHandlerEvent.bind(this);
      }
      and in render method 
      <button onChange={this.handleChange }> </button>
  }
     */
  constructor(props) {
    super(props);
    this.state = {Name: '',buttonname:''};
    this.myHandlerEvent=this.myHandlerEvent.bind(this);
     //this.myinitialStateEvent=this.myinitialStateEvent.bind(this);
  }

  mymethod( ){  
    return "beast team";
  }
 myHandlerEvent(value){ 
  this.setState({
    Name: value
    });
 }
 myinitialStateEvent( ){ 
  this.setState({
    buttonname: 'button name change'
    });
 }
  render() {
     
    return (
      <div className="container">  
          <p>
            hello {this.state.Name},
          </p> 
          <ButtonComponet abc={this.state.buttonname} parentmethod={this.myinitialStateEvent.bind(this)}> 
          </ButtonComponet>
          <hr/> 
           <ButtonComponentClickFeature customprop="call perent method" parentmethod={this.myHandlerEvent }>  
          </ButtonComponentClickFeature>
     </div>
    );
  }
}

class ButtonComponentClickFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.handleclick= this.handleclick.bind(this); 
    this.handleStateclick= this.handleStateclick.bind(this);
  }
   
  handleclick(){ debugger; 
    this.props.parentmethod( 'ttttt-change ');
  } 
  handleStateclick(){ debugger; 
    if(this.state.title==="")
    this.setState({ title:  'changes Done..... '});
    else this.setState({ title: ''});
  } 
  render() {
    return ( <div > Child component <br/>
          <button className="btn btn-primary" onClick={this.handleclick}>
                 {this.props.customprop}  
          </button> <br/>
          <button className="btn btn-primary" onClick={this.handleStateclick}>
              change child state-   {this.state.title}  
          </button> </div>
    );
  }
}
ButtonComponentClickFeature.propTypes = {
  parentmethod: PropTypes.func,
  customprop:PropTypes.string
};
export default App;
