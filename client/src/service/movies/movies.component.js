import React from 'react';
import { Image, Segment, Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMovies } from './movies.action';
import { map } from 'lodash';
import AppLayout from '../../common/AppLayout';
import Pagination from '../../common/Pagination';
import { Link } from 'react-router-dom';
import notFoundImage from '../../common/resources/imageNotFound.jpg';
import Month from '../../common/Month';
import Excerpt from '../../common/Excerpt';

class Movies extends React.Component {
  constructor (props) {
    super(props);
    this.props.fetchMovies();
    this.state = {
      pageOfMovies: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage (pageOfMovies) {
    this.setState({
      pageOfMovies: pageOfMovies
    });
  }

  render () {
    let error = this.props.state.error;
    let movies = this.props.state.movies;

    let movieComponent = map(this.state.pageOfMovies, (movie, key) => (
      <Card link as={Link} to={'/movie/' + movie.id} key={key} fluid color='black'>
        {movie.backdrop_path && <Image src={'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path} />}
        {!movie.backdrop_path && movie.alternative_image !== 'N/A' && <Image src={movie.alternative_image} />}
        {!movie.backdrop_path && movie.alternative_image === 'N/A' && <Image src={notFoundImage} />}
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Meta>{map(movie.genres, 'name').toString()}</Card.Meta>
          <Card.Description>{movie.plot ? Excerpt(movie.plot, 120) : null}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {map(movie.rating, (months, key) => (
            map(months, (val, idx) => (
              <div>
                {idx.toString() === Month && map(val, (src, index) => (
                  <div key={index}>
                    {src.Source.toString() === 'Internet Movie Database' ? <Icon name='imdb' /> : src.Source.toString() + ' : '} {src.Value}
                  </div>
                ))}
              </div>
            ))
          ))}
        </Card.Content>
      </Card>
    ));
    let container = error ? (<div>{error}</div>) : (
      <div>
        {
          movies.constructor === Array &&
          <Segment>
            <Card.Group itemsPerRow={2}>
              {movieComponent}
            </Card.Group>
            <Pagination items={movies} onChangePage={this.onChangePage} />
          </Segment>
        }
        {
          movies.constructor !== Array &&
          <p>movies not found</p>
        }
      </div>
      );

    return (
      <AppLayout section='movies'>
        {container}
      </AppLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.movies
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
