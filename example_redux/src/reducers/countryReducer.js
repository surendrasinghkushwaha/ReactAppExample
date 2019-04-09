import * as actionTypes from '../actions/actionTypes';
import $ from 'jquery';
export default (state = [], action) => {
    switch (action.type){
      case actionTypes.GET_COUNTRY_FILE: { 
       debugger; 
       return   action.countries;
      
       /*  return [
            ...state,
            Object.assign({}, action.filename,  data.countries)
        ]; */
      }
      break;
      
      case actionTypes.CLEAR_COUNTRY:{ 
         return [];//state.filter((data, i) => i !== action.filename);
      }
      default:
            return state;
    }
  };

  
   
 
  
 