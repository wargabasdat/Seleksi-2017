import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Container, Header, Divider, Segment, Icon, Rating, Popup, Label, Modal, Button, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMovie } from './movie.action';
import { map, reduce, sortBy, filter } from 'lodash';
import AppLayout from '../../common/AppLayout';
import notFoundImage from '../../common/resources/imageNotFound.jpg';
import { Month, capitalizeFirstLetter } from '../../common/Common';
import MovieChart from './components/movie.chart';
import EmbedVideo from './components/movie.video';
import RatingLabel from '../../common/RatingLabel';

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.props.fetchMovie(this.props.match.params.id);
    this.normalizeChart = this.normalizeChart.bind(this);
    this.state = { modalOpen: true };
  }

  componentDidUpdate(prevProps, prevStates) {
    
  }

  handleClose = () => this.setState({modalOpen: false});

  normalizeChart(rating) {
    let dataChart = map(reduce(
      rating, 
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(value);
        return result;
      }
    ), (result, value, key) => {
      let obj = {};
      obj['name'] = value.toString() === '_id' ? null : capitalizeFirstLetter(value.toString());
      obj['label'] = value.toString() === '_id' ? null : capitalizeFirstLetter(value.toString().substring(0,3));
      switch(value.toString()) {
        case 'january' :
          obj['id'] = 1;
          break;
        case 'february' :
          obj['id'] = 2;
          break;
        case 'march' :
          obj['id'] = 3;
          break;
        case 'april' :
          obj['id'] = 4;
          break;
        case 'may' :
          obj['id'] = 5;
          break;
        case 'june' :
          obj['id'] = 6;
          break;
        case 'july' :
          obj['id'] = 7;
          break;
        case 'august' :
          obj['id'] = 8;
          break;       
        case 'september' :
          obj['id'] = 9;
          break;
        case 'october' :
          obj['id'] = 10;
          break;     
        case 'november' :
          obj['id'] = 11;
          break;                                                                    
        case 'december' :
          obj['id'] = 12;
          break;  
        default:
          return null;
      }
      map(result, (val, keys) => {
        obj[val['Source']] = val['Source'] !== 'Internet Movie Database' ? parseFloat(val['Value']) / 10 : parseFloat(val['Value']); 
      });
      return obj;
    });

    dataChart = sortBy(dataChart, ['id']);
    dataChart = filter(dataChart, o => {return o !== null});

    return dataChart;
  }

  render () {
    const {error, movie} = this.props.state;
    let container = error ? 
        (
          <div>{error}</div>
        ) 
      : 
        (
          <div>
            {
              movie &&
              <Segment>
                <Grid>
                  <Grid.Column width={4}>
                    {movie.poster_path && <div>Poster:<Image src={'http://image.tmdb.org/t/p/w500/' + movie.poster_path} /><Divider section /></div>}
                    {movie.backdrop_path && <div><Image src={'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path} /><Divider section /></div>}
                    {movie.alternative_image !== 'N/A' && <div><Header as='h3'>Alternative image : </Header><Image src={movie.alternative_image} /><Divider section /></div>}
                    {!movie.backdrop_path && movie.alternative_image === 'N/A' && <Image src={notFoundImage} />}
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Container text>
                      <Header as='h2'>{movie.title}</Header>
                      {
                        movie.imdb_id && 
                        <div>
                          <Label color='black' as='a' href={'http://imdb.com/title/' + movie.imdb_id}>
                            <Icon name='imdb' color='yellow'/>
                            id :
                            <Label.Detail>{movie.imdb_id}</Label.Detail>
                          </Label><br />
                        </div>
                      }
                      <Header as='h4'>{
                        movie.genres ? 
                          <div>{
                            map(
                              map(movie.genres, 'name'), (val, idx) => (
                                <Label as={Link} to={'/genre/' + val} key={idx} content={val} />
                            ))
                          }</div> 
                        : null
                      }</Header>
                      <Header as='h4'>
                        {
                          movie.release_date ? 
                              <div>Release date: {new Date(movie.release_date).toLocaleDateString()}</div> 
                            : 
                              null
                        } 
                      </Header>
                      <Header as='h4'>TMDb vote average :
                        <Popup
                          key={movie.vote_average}
                          trigger={<Rating rating={Math.round(Number(movie.vote_average))} maxRating={10} disabled />}
                          header='TMDb Rating'
                          content={<div>{movie.vote_average} from {movie.vote_count} votes </div>}
                        />
                      </Header>
                      <Header as='h5'>
                        {
                          movie.adult === 'true' ? 
                              <Label color='red'>Adult</Label> 
                            : 
                              <Label color='teal'>Not adult</Label>
                        }
                      </Header>
                      <Divider section />
                        <Header as='h4'>Plot : </Header>
                          <p>{movie.plot || 'N/A'}</p>
                      <Divider section />
                        <EmbedVideo movie_id={movie.id} />
                      <Divider section />
                        <Header as='h4'>Ratings this month ({capitalizeFirstLetter(Month)}) : </Header>
                          <RatingLabel rating={movie.rating} />
                      <Divider section />
                        <MovieChart data={this.normalizeChart(movie.rating)} month={capitalizeFirstLetter(Month)} />
                    </Container>
                  </Grid.Column>
                </Grid>
              </Segment>
            }
            {
              !movie &&
              <p>movie not found</p>
            }
            {
              movie.adult !== 'false' &&         
              <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeOnEscape={false}
                closeOnDimmerClick={false}
                closeOnDocumentClick={false}
                closeOnRootNodeClick={false}
                closeOnPortalMouseLeave={false}
                closeOnTriggerMouseLeave={false}
                closeOnTriggerBlur={false}
                closeOnTriggerClick={false}
                dimmer
                size='small'
              >
                <Header icon='warning' color='red' content='Warning, Adult Content!' />
                <Modal.Content>
                  <h2>Are you sure you are 18+?</h2><br />
                  <h3>If not, we will redirect you back to homepage, be safe!</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button as={Link} to='/' color='green' onClick={this.handleClose} inverted positive>
                    <Icon name='checkmark' /> No
                  </Button>
                  <Button color='red' onClick={this.handleClose} inverted negative>
                    <Icon name='warning sign' /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
            }
          </div>
        );

    return (
      <div>
        {
          this.props.state.fetching  &&
          <Modal open={this.props.state.fetching} basic>
            <Modal.Content>
              <Loader size='massive' active inverted>Fetching movie...</Loader>
            </Modal.Content>
          </Modal>
        }
        {
          this.props.state.fetched &&
          <AppLayout section='movie' inverted={true}>
            {container}
          </AppLayout>
        }
      </div>
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
)(Movie);
