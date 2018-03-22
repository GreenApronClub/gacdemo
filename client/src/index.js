import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore } from 'redux';
import './index.css';

import NavBar from './containers/navbar/navbar';
import SignUp from './components/user/signup';
import Login from './components/user/login';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider> ,
  document.querySelector('#root')
);
