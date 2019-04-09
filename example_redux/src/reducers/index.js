
import { combineReducers } from 'redux';
import countries from './countryReducer';

export default combineReducers({
    countries: countries
});