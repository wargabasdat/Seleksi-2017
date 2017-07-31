import React from 'react';
import { Link } from 'react-router-dom';
import {Header, Icon} from 'semantic-ui-react';

const Logo = ({ type }) => {
  return (
    <Link to='/'>
      <Header as={type} inverted color='teal'>
        <Icon name='film' />
        <Header.Content>
          movieFreak
          <Header.Subheader>
            A helping hand for movie enthusiast
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Link>
  );
};

export default Logo;
