import {  combineReducers } from 'redux';
import SignupReducer from './reducer_signup';
import SessionReducer from './login/session';
import StrainsReducer from './strains/reducerStrains';
import AddStrainReducer from './manage_strains/reducerAddStrain'
import NavigationReducer from './navigation/reducer_navigation';
import ImageUploadReducer from './upload/reducerImageUpload';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  userData: SignupReducer,
  session: SessionReducer,
  route: NavigationReducer,
  strainList: StrainsReducer,
  addStrain: AddStrainReducer,
  imageData: ImageUploadReducer,
  form: formReducer
});

export default rootReducer;
