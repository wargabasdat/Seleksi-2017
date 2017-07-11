import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from './movie.action';

let App = ({ fetching, fetchMovie }) => (
  <div>
    <button class="waves-effect waves-light btn" onClick={fetchMovie}>Start Fetching</button>
    <div>
      {fetching.toString()}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};
/*
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);*/
App = connect(
  ({ fetching }) => ({ fetching }),
  { fetchMovie }
)(App);

export default App;