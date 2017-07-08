// app.jsx

import 'babel-polyfill';
import React from 'react';
import {Link} from 'react-router-dom';
import Main from './Main';

const App = () => {
  return (
    <div>
      <div>
        <nav>
          <div class="nav-wrapper teal darken-4">
            <a href="/" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <Main />
    </div>
  );
};

export default App;
