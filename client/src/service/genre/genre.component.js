import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Label, Grid, Menu, Segment, Item, Modal, Loader } from 'semantic-ui-react';
import { pick, map, findIndex, sortBy } from 'lodash';
import { fetchMovies } from '../movies/movies.action';
import AppLayout from '../../common/AppLayout';
import { Month } from '../../common/Common';
import Excerpt from '../../common/Excerpt';
import notFoundImage from '../../common/resources/imageNotFound.jpg';
import RatingLabel from '../../common/RatingLabel';

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchMovies();
  }

  findByGenre(genre) {
    if(!genre) genre = 'Action';
    let arr = [];
    map(this.props.state.movies, (result) => {
        map(result.genres, (val) => {
          map(pick(val, 'name'), (value) => {
            if(value === genre) {
              arr.push(result);
            }
          });
        });
    });

    arr = sortBy(arr, (o => {
      return map(o.rating, val => {
        return map(val[Month], (result) => {
          return result.Source === 'Internet Movie Database' ? parseFloat(result.Value) : 0;
        });
      })
    })).reverse();
    return map(arr, (result, key) => (
      <Item key={key} as={Link} to={'/movie/' + result.id}>
        {result.poster_path && <Item.Image src={'http://image.tmdb.org/t/p/w185/' + result.poster_path} />}
        {!result.poster_path && result.backdrop_path && <Item.Image src={'http://image.tmdb.org/t/p/w185/' + result.backdrop_path} />}
        {!result.poster_path && !result.backdrop_path && result.alternative_image !== 'N/A' && <Item.Image src={result.alternative_image} />}
        {!result.poster_path && !result.backdrop_path && result.alternative_image === 'N/A'  && <Item.Image src={notFoundImage} />}

        <Item.Content>
          <Item.Header>{result.title}</Item.Header>
          <Item.Meta>
            <span className='cinema'>{map(result.genres, 'name').toString()}</span>
          </Item.Meta>
          <Item.Description>{result.plot ? Excerpt(result.plot, 250) : null}</Item.Description>
          <Item.Extra>
            <RatingLabel rating={result.rating}/>
          </Item.Extra>
        </Item.Content>
      </Item>
    ));
  }

  listAllGenre = () => {
    let arr = [];
    map(this.props.state.movies, (result) => {
        map(result.genres, (val) => {
          map(pick(val, 'name'), (value) => {
            let index = findIndex(arr, {genre: value});
            if(index === -1) {
              arr.push({
                genre: value,
                count: 1
              });
            } else {
              let countInc = arr[index].count + 1;
              arr[index] = {genre: value, count: countInc};
            }
          });
        });
    });
    
    
    return map(sortBy(arr, 'genre'), (result, key) => (
      <Menu.Item as={Link} to={'/genre/' + result.genre} active={this.props.match.params.genre ?  this.props.match.params.genre === result.genre : result.genre === 'Action'} key={key} >
        {result.genre} <Label color={this.props.match.params.genre ? ((this.props.match.params.genre === result.genre) ? 'teal' : 'grey') : ((result.genre === 'Action') ? 'teal' : 'grey')}>{result.count}</Label>
      </Menu.Item>
    ));
  }

  render() {
    const { error } = this.props.state;
    const container = error ? (<div>{error}</div>) : (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {this.listAllGenre()}
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment>
            <Item.Group divided>
              {this.findByGenre(this.props.match.params.genre)}
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid>
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
          <AppLayout section='genre'>
            {container}
          </AppLayout>
        }
      </div>
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

const GenreComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Genre);

export default GenreComponent;