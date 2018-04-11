import {  combineReducers } from 'redux';
import SignupReducer from './reducer_signup';
import SessionReducer from './login/session';
import StrainsReducer from './strains/reducerStrains';
import NavigationReducer from './navigation/reducer_navigation';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  userData: SignupReducer,
  session: SessionReducer,
  route: NavigationReducer,
  strainList: StrainsReducer,
  form: formReducer
});

export default rootReducer;
