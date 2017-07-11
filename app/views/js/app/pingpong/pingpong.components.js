import React from 'react';
import { connect } from 'react-redux';
import { ping } from './pingpong.actions';

let App = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button class="waves-effect waves-light btn" onClick={ping}>Start PING</button>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(App);

export default App;