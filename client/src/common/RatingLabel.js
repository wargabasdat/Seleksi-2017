import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon, Image } from 'semantic-ui-react';
import { map } from 'lodash';
import metacritic from './resources/metacritic.svg';
import rotten from './resources/rotten.svg';
import { Month } from './Common';

class RatingLabel extends React.Component {
  render () {
    const rating = map(this.props.rating, (months, key) => (
      map(months, (val, idx) => (
        <div>
          {idx.toString() === Month && map(val, (src, index) => (
            <div key={index}>
              {
                src.Source.toString() === 'Internet Movie Database' &&
                src.Value &&
                  <Label color='black'>
                    <Icon name='imdb' color='yellow' />
                    {src.Source.toString()}
                    <Label.Detail>{src.Value}</Label.Detail>
                  </Label>
              }
              {
                src.Source.toString() === 'Rotten Tomatoes' &&
                src.Value &&
                  <Label color='green' image>
                    <Image src={rotten} shape='rounded' fluid avatar />
                    {src.Source.toString()}
                    <Label.Detail>{src.Value}</Label.Detail>
                  </Label>
              }
              {
                src.Source.toString() === 'Metacritic' &&
                src.Value &&
                  <Label color='blue' image>
                    <Image src={metacritic} shape='rounded' fluid avatar />
                    {src.Source.toString()}
                    <Label.Detail>{src.Value}</Label.Detail>
                  </Label>
              }
            </div>
          ))}
        </div>
      ))
    ));

    return (
      <div>
        {rating}
      </div>
    );
  }
}

RatingLabel.propTypes = {
  rating: PropTypes.array
};

export default RatingLabel;
