import React from 'react';
import { Sidebar, Segment, Menu, Icon, Container, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Footer from './Footer';
import Logo from './Logo';

class AppLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = { visible: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility () {
    this.setState({ visible: !this.state.visible });
  }

  render () {
    const { visible } = this.state;
    const { section } = this.props;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home' active={section === 'home'} link as={Link} to='/'>
              <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item name='genre' active={section === 'genre'} link as={Link} to='/genre'>
              <Icon name='tags' />
                Genre
            </Menu.Item>
            <Menu.Item name='about' active={section === 'about'} link as={Link} to='/about'>
              <Icon name='id badge' />
                About
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment inverted>
              <Grid columns='equal' stackable>
                <Grid.Column>
                  <Segment inverted><Button icon='block layout' onClick={this.toggleVisibility} /></Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Segment inverted>
                    <Logo type='h3' />
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment floated='right' inverted><Search /></Segment>
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment basic inverted={this.props.inverted}>
              <Container fluid style={{ padding: '20px 2.4vw' }}>
                {this.props.children}
              </Container>
            </Segment>
            <Segment inverted>
              <Footer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default AppLayout;
