import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './components/navbar/navbar';
import SignUp from './components/user/signup';

const App = () => {
  return (
    <div>
      <NavBar />
      <SignUp />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
