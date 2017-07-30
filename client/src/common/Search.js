import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, Label, Grid, Image } from 'semantic-ui-react';
import { filter, escapeRegExp, take, pick, keys, map, transform } from 'lodash';
import imageNotFound from './resources/imageNotFound.jpg';
import { fetchMovie } from '../service/movie/movie.action';

class SearchComponent extends React.Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => this.props.fetchMovie(result.price);

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      let newArray = filter(this.props.state.movies, isMatch);
      let key = {
        id: null,
        poster_path: null,
        genres: null,
        title: null
      }

      let keyMapping = {
        'poster_path': 'image',
        'genres': 'description',
        'id': 'price',
        'title': 'title'
      }

      newArray = map(map(newArray, (value) => (
        pick(value, keys(key))  
      )), (currentObject) => {
          return transform(currentObject, (result, value, idx) => {
              result[keyMapping[idx]] = Array.isArray(value) ? map(value, 'name').toString() : String(value);
      })});

      this.setState({
        isLoading: false,
        results: take(newArray, 10),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        onSearchChange={this.handleSearchChange}
        onResultSelect={this.handleResultSelect}
        results={results}
        value={value}
        resultRenderer={this.props.resultRenderer}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.movies
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: id => dispatch(fetchMovie(id))
  };
};

const SearchMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

const resultRenderer = ({ title, price, description, image }) => (
  <Link to={'/movie/' + price}>
    <Grid columns={2} inverted container stackable padded='vertically'>
      <Grid.Column width={8}>
        <Grid.Row stretched>
          <Label color='teal' content={title} />
        </Grid.Row>
        <Grid.Row>
          <Label color='olive' content={'ID : ' + price} /> 
        </Grid.Row>
        {description && <Grid.Row stretched> <Label color='purple' content={'(' + description + ')'} /></Grid.Row>}
      </Grid.Column>
      <Grid.Column width={8}>
          {image && <Image src={'http://image.tmdb.org/t/p/w185/' + image} avatar/>}
          {!image && <Image src={imageNotFound} avatar/>}
      </Grid.Column>
    </Grid>
  </Link>
);

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchCustom = () => (
  <SearchMovies resultRenderer={resultRenderer} />
)

export default SearchCustom;