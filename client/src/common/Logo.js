// ./app/views/js/components/common/AboutPage.js
import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const Logo = () => {
  return (
    <Header as='h3' inverted color='teal'>
      <Icon name='film' />
      <Header.Content>
        movieFreak
        <Header.Subheader>
          A helping hand for movie enthusiast
        </Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default Logo;
