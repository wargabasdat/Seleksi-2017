import React from 'react';
import { Image, Grid, Container, Header, Divider, Segment, Icon, Rating, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMovie } from './movie.action';
import { map } from 'lodash';
import AppLayout from '../../common/AppLayout';
import notFoundImage from '../../common/resources/imageNotFound.jpg';
import Month from '../../common/Month';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.props.fetchMovie(this.props.match.params.id);
  }

  render () {
    let error = this.props.state.error;
    let movie = this.props.state.movie;
    let container = error ? (<div>{error}</div>) : (
      <div>
        {
          movie &&
          <Segment>
            <Grid>
              <Grid.Column width={4}>
                {movie.backdrop_path && <div><Image src={'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path} /><Divider section /></div>}
                {movie.alternative_image !== 'N/A' && <div><Header as='h3'>Alternative image : </Header><Image src={movie.alternative_image} /><Divider section /></div>}
                {!movie.backdrop_path && movie.alternative_image === 'N/A' && <Image src={notFoundImage} />}
              </Grid.Column>
              <Grid.Column width={9}>
                <Container text>
                  <Header as='h2'>{movie.title}
                    <Header as='h4'>{movie.genres ? <div>({map(movie.genres, 'name').toString()})</div> : null}</Header>
                  </Header>
                  <Header as='h4'>{movie.release_date ? <div>Release date: {new Date(movie.release_date).toLocaleDateString()}</div> : null} </Header>
                  <Header as='h4'>TMDb vote average :
                    <Popup
                      key={movie.vote_average}
                      trigger={<Rating rating={Math.round(Number(movie.vote_average))} maxRating={10} disabled />}
                      header='TMDb Rating'
                      content={<div>{movie.vote_average} from {movie.vote_count} votes </div>}
                    />
                  </Header>
                  <Header as='h5'>Adult : {movie.adult}</Header>
                  <Divider section />
                  <Header as='h4'>Plot : </Header>
                  <p>{movie.plot}</p>
                  <Divider section />
                  <Header as='h4'>Ratings : </Header>
                  {map(movie.rating, (months, key) => (
                    map(months, (val, idx) => (
                      <div>
                        {idx.toString() === Month && map(val, (src, index) => (
                          <div>
                            {src.Source.toString() === 'Internet Movie Database' ? <Icon name='imdb' /> : src.Source.toString() + ' : '} {src.Value}
                          </div>
                        ))}
                      </div>
                    ))
                  ))}
                </Container>
              </Grid.Column>
            </Grid>
          </Segment>
        }
        {
          !movie &&
          <p>movie not found</p>
        }
      </div>
      );

    return (
      <AppLayout section='movie'>
        {container}
      </AppLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.movie
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: id => dispatch(fetchMovie(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
