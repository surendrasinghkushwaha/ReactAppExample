import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class ButtonComponent extends Component {
   
    render() {
      return ( 
            <button class="btn btn-primary">
                   {this.props.customprop}  
            </button> 
      );
    }
  }
  
  export default ButtonComponent;