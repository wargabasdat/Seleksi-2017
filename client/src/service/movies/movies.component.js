import React from 'react';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { Image, Segment, Card, Icon, Loader, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMovies } from './movies.action';
import { map } from 'lodash';
import AppLayout from '../../common/AppLayout';
import Pagination from '../../common/Pagination';
import { Link } from 'react-router-dom';
import notFoundImage from '../../common/resources/imageNotFound.jpg';
import { Month } from '../../common/Common';
import Excerpt from '../../common/Excerpt';

class Movies extends React.Component {
  constructor (props) {
    super(props);
    this.props.fetchMovies();
    this.state = {
      pageOfMovies: []
    };
    this.onChangePages = this.onChangePages.bind(this);
  }

  onChangePages (pageOfMovies) {
    this.setState({
      pageOfMovies: pageOfMovies
    });
  }

  render () {
    let error = this.props.state.error;
    let movies = this.props.state.movies;
    const { page } = this.props;

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
                <Pagination items={movies} onChangePage={this.onChangePages} urlParent='/' page={page || 1} />
              </Segment>
            }
        {
              movies.constructor !== Array &&
              <p>movies not found</p>
            }
      </div>
      );

    return (
      <div>
        {
          this.props.state.fetching &&
          <Modal open={this.props.state.fetching} basic>
            <Modal.Content>
              <Loader size='massive' active inverted>Fetching movies...</Loader>
            </Modal.Content>
          </Modal>
        }
        {
          this.props.state.fetched &&
          <AppLayout section='movies'>
            {container}
          </AppLayout>
        }
      </div>
    );
  }
}

Movies.proptypes = {
  page: PropTypes.string,
  onChangePage: PropTypes.func
};

const urlPropsQueryConfig = {
  page: { type: UrlQueryParamTypes.string }
};

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

const MoviesComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

export default addUrlProps({ urlPropsQueryConfig })(MoviesComponent);
