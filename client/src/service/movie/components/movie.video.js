import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Embed, Message, Accordion, Label} from 'semantic-ui-react';
import { map } from 'lodash';
import axios from 'axios';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      error: null
    }
  }

  componentWillMount() {
    this.fetchVideo(this.props.movie_id);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.movie_id !== this.props.movie_id) this.fetchVideo(this.props.movie_id);
  }

  fetchVideo = (id) => {
    if(id !== undefined) {
      axios.get('http://api.themoviedb.org/3/movie/'+ id + '/videos?api_key=cc45f3c05303c8108fe07e755a4743c1')
      .then((response) => this.setState({videos: response.data.results}))
      .catch((err) => this.setState({error: err.message}));
    }
  }

  render() {
    return (
      <Segment>
        { 
          !this.state.error && this.state.videos.length > 0 &&
          <Accordion 
          panels={
            map(this.state.videos, (result, key) => {
              return {
                key: String(key),
                title: <Label color='teal' content={result.name} />,
                content: (
                    <Embed
                      id={result.key}
                      hd={true}
                      placeholder={'https://img.youtube.com/vi/' + result.key + '/hqdefault.jpg'}
                      source={result.site.toLowerCase()}
                    />
                )
              }
            })
          } inverted/>
        }
        { 
          !this.state.error && this.state.videos.length === 0 &&
          <div>
            <Message warning>
              <Message.Header>Video not found</Message.Header>
              <p>Sorry :(</p>
            </Message>
          </div>
        }
        { 
          this.state.error &&
          <div>
            <Message warning>
              <Message.Header>Something's wrong</Message.Header>
              <p>{this.state.error}</p>
            </Message>
          </div>
        }
      </Segment>
    );
  }
};

Video.propTypes = {
  movie_id: PropTypes.number
}

export default Video;
