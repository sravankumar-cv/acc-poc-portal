import { combineReducers } from 'redux';

import isLoggedInReducer from './isLoggedIn';
import userRegisterReducer from './userRegister';
import userLoginReducer from './userLogin';
import getCountriesReducer from './getCountries';

export default combineReducers({
    getCountries: getCountriesReducer,
    isLoggedIn: isLoggedInReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer
});
