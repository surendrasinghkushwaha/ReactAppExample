import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
//-----------we require connect from 'react-redux'  and countryAction from './countryAction'
import { connect } from 'react-redux';
import * as countryAction from './actions/countryAction';
 
class App extends Component {
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);//handle input textbox changes
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.state = {
        fileName: ''
      }
    }
  
    handleChange(e){
    this.setState({
      fileName: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.fileName);
    
      debugger;
    $.ajax({
      method: "GET",
      url: "../datafile/"+this.state.fileName+".json?"+new Date().getMilliseconds(),
      dataType: "json",
      contentType: "application/json", 
      async:false ,
     success:function(data){
     // this.state.setState({countries:data});
      this.props.getCountryFile(data);
    }.bind(this) 
  }) 
 
    
  }
  handleClear(e){
    e.preventDefault();
    console.log(this.state.fileName);
    this.setState({
      fileName: ''
    })
    this.props.clearCountry(null); 
  }  

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.id +" | "+ data.country}
          </li>
        </div>
        
    </div> 
    )
  }
  render() {
     
    var d=this.props.countries;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div className="row">
        <div className="form-group">
        <label htmlFor="txtcountry">Country</label>
         <input type="text"  className="form-control" id="txtcountry" onChange={this.handleChange} value={this.state.fileName} />
         <input type="button"  className="btn btn-primary" value="Search" onClick={this.handleSubmit}/>
         <input type="button"  className="btn btn-primary" value="Clear"  onClick={this.handleClear}/>
        </div>
       
        </div>
         <div className="row"> 
         <hr />Output:<br/>
           <ul className="list-group">
          {
            this.props.countries.map((country, i) => this.listView(country, i))}
        </ul>  
         </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    fileName: state.fileName,
    countries:state.countries
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountryFile: data => dispatch(countryAction.getCountryFile(data)),
    clearCountry:data=>  dispatch(countryAction.clearCountry( data)),
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
