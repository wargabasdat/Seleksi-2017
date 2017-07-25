import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from './movie.action';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.fetchMovie = this.props.fetchMovie.bind(this);
  }

  render () {
    let error = this.props.state.error;

    let container = null;
    if (error) {
      container = <div>{error}</div>;
    } else {
      container = (
        <div>
          <button class='waves-effect waves-light btn' onClick={() => this.fetchMovie(2)}>Start Fetching</button>
          <div>
            {JSON.stringify(this.props.state.movies)}
          </div>
        </div>
      );
    }
    return (
      <div>
        {container}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    state: state.movieReducer
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // You can now say this.props.createBook
    fetchMovie: id => dispatch(fetchMovie(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
