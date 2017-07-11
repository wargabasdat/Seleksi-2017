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
            <a href="/" class="brand-logo">movieFreak</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pingpong">Ping Pong</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container">
        <h1>Here goes the slideshow</h1>
      </div>
      <div class="row">

        <div class="col s12 m4 l3">

        </div>

        <div class="col s12 m8 l9">
          <Main />
        </div>

      </div>
    </div>
  );
};

export default App;
