import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Container, Header, Divider, Segment, Icon, Rating, Popup, Label, Modal, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMovie } from './movie.action';
import { map, reduce, sortBy, filter } from 'lodash';
import AppLayout from '../../common/AppLayout';
import notFoundImage from '../../common/resources/imageNotFound.jpg';
import metacritic from '../../common/resources/metacritic.svg';
import rotten from '../../common/resources/rotten.svg';
import Month from '../../common/Month';
import MovieChart from './components/movie.chart';


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.props.fetchMovie(this.props.match.params.id);
    this.showRating = this.showRating.bind(this);
    this.normalizeChart = this.normalizeChart.bind(this);
    this.state = { modalOpen: true };
  }

  handleClose = () => this.setState({modalOpen: false});

  showRating(rating) {
    return map(rating, (months, key) => (
      map(months, (val, idx) => (
        <div>
          {idx.toString() === Month && map(val, (src, index) => (
            <div key={index}>
              {
                src.Source.toString() === 'Internet Movie Database' &&
                src.Value &&
                  <Label color='black'>
                    <Icon name='imdb' color='yellow'/>
                    {src.Source.toString()}
                    <Label.Detail>{src.Value}</Label.Detail>
                  </Label>
              }
              {
                src.Source.toString()  === 'Rotten Tomatoes' &&
                src.Value &&
                  <Label color='green' image>
                    <Image src={rotten} shape='rounded' fluid avatar/>
                    {src.Source.toString()}
                    <Label.Detail>{src.Value}</Label.Detail>
                  </Label>
              }
              {
                src.Source.toString()  === 'Metacritic' &&
                src.Value &&
                  <Label color='blue' image>
                    <Image src={metacritic} shape='rounded' fluid avatar/>
                    {src.Source.toString()}
                    <Label.Detail>{src.Value}</Label.Detail>
                  </Label>
              }
            </div>
          ))}
        </div>
      ))
    ));
  }

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
                  <Header as='h2'>{movie.title}</Header>
                  <Header as='h4'>{movie.genres ? <div>{map(map(movie.genres, 'name'), (val, idx) => (
                    <Label as={Link} to={'/genre/' + val} key={idx}>{val}</Label>
                  ))}</div> : null}</Header>
                  <Header as='h4'>{movie.release_date ? <div>Release date: {new Date(movie.release_date).toLocaleDateString()}</div> : null} </Header>
                  <Header as='h4'>TMDb vote average :
                    <Popup
                      key={movie.vote_average}
                      trigger={<Rating rating={Math.round(Number(movie.vote_average))} maxRating={10} disabled />}
                      header='TMDb Rating'
                      content={<div>{movie.vote_average} from {movie.vote_count} votes </div>}
                    />
                  </Header>
                  <Header as='h5'>{movie.adult === 'true' ? <Label color='red'>Adult</Label> : <Label color='teal'>Not adult</Label>}</Header>
                  <Divider section />
                  <Header as='h4'>Plot : </Header>
                  <p>{movie.plot}</p>
                  <Divider section />
                  <Header as='h4'>Ratings this month ({capitalizeFirstLetter(Month)}) : </Header>
                  {this.showRating(movie.rating)}
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
            dimmer
            size='small'
          >
            <Header icon='warning' color='red' content='Warning, Adult Content!' />
            <Modal.Content>
              <h2>Are you sure you are 18+?</h2><br />
              <h3>If not, we will redirect you back to homepage, be safe!</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button link as={Link} to='/' color='red' onClick={this.handleClose} inverted>
                <Icon name='warning sign' /> No
              </Button>
              <Button color='green' onClick={this.handleClose} inverted>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
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
)(Movie);
