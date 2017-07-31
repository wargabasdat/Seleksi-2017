import React from 'react';
import {Segment, Image, Card, Button, Header, Icon} from 'semantic-ui-react';
import rayandrew from './resources/rayandrew.jpg';
import hape from './resources/hape.jpg';

const Footer = () => {
  return (
    <Segment inverted>
      <Header floated='right' as='h5' textAlign='center'>
        <Icon inverted name='key' circular />
        <Header.Content as='a' href='https://raw.githubusercontent.com/ironlota/Seleksi-2017/master/LICENSE.md'>
            MIT License
          </Header.Content>
      </Header>
      <Header floated='left' as='h5' textAlign='center'>
        <Icon inverted name='github' circular />
        <Header.Content as='a' href='https://github.com/ironlota/Seleksi-2017'>
            movieFreak
          </Header.Content>
      </Header>
      <Header as='h3' icon textAlign='center' dividing size='tiny'>
        <Icon inverted name='users' circular />
        <Header.Content>
          Created by:
        </Header.Content>
      </Header>
      <Card.Group itemsPerRow={2} doubling stackable>
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' inline src={rayandrew} />
            <Card.Header>Ray Andrew</Card.Header>
            <Card.Meta>Bandung, Indonesia</Card.Meta>
            <Card.Description>Student at Informatics Engineering Institut Teknologi Bandung</Card.Description>
            <Card.Content extra>
              <Button icon='github' basic as='a' to='https://github.com/ironlota' fluid />
            </Card.Content>
          </Card.Content>
        </Card>
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={hape} />
            <Card.Header>Adrian HP</Card.Header>
            <Card.Meta>Bandung, Indonesia</Card.Meta>
            <Card.Description>Student at Informatics Engineering Institut Teknologi Bandung</Card.Description>
            <Card.Content extra>
              <Button icon='github' basic as='a' to='https://github.com/adrianhp97' fluid />
            </Card.Content>
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  );
};

export default Footer;
