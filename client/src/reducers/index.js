//Here go all reducers

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
//A object is passed with the different reducers
export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer
    
  });