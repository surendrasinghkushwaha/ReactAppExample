import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class ButtonComponent extends Component {
   
    render() {
      return ( 
            <button className="btn btn-primary" onClick={this.props.parentmethod}>
                button-   {this.props.abc}  
            </button> 
      );
    }
  }
  
  export default ButtonComponent;