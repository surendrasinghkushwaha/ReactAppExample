import * as actionTypes from './actionTypes';

export const getCountryFile = (data,dispatch) => {
  console.log('countryAction.js- getCountryFile call param data:',data)
    return {
      type: actionTypes.GET_COUNTRY_FILE,
      countries: data  
    }
  };

export const clearCountry = (data,dispatch) => {
  console.log('countryAction.js- clearCountry call param filename:',data)
    return {
        type: actionTypes.CLEAR_COUNTRY,
        countries: [] 
    }
}