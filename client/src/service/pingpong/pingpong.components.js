import React from 'react';
import { connect } from 'react-redux';
import { ping } from './pingpong.actions';
import AppLayout from '../../common/AppLayout';
import { Button } from 'semantic-ui-react';

let App = ({ isPinging, ping }) => (
  <AppLayout section='pingpong'>
    <h1>is pinging: {isPinging.toString()}</h1>
    <Button
      icon='play'
      label={{ as: 'a', basic: true, content: isPinging.toString() }}
      labelPosition='left'
      onClick={ping}
    />
  </AppLayout>
);

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    isPinging: state.ping.isPinging
  };
};

App = connect(
  mapStateToProps,
  { ping }
)(App);

export default App;
