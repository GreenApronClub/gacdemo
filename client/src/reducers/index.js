import {  combineReducers } from 'redux';
import SignupReducer from './reducer_signup';
import NavigationReducer from './navigation/reducer_navigation';

const rootReducer = combineReducers({
  userData: SignupReducer,
  route: NavigationReducer
});

export default rootReducer;
