import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Segment, Menu, Icon, Container, Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
            <Menu.Item name='movies' active={section === 'movies'} link as={Link} to='/movies'>
              <Icon name='film' />
                Movies
              </Menu.Item>
            <Menu.Item name='pingpong' active={section === 'pingpong'} link as={Link} to='/pingpong'>
              <Icon name='game' />
                PingPong
              </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment inverted>
              <Menu inverted pointing secondary>
                <Menu.Item>
                  <Button icon='block layout' onClick={this.toggleVisibility} />
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Segment>
            <Segment basic>
              <Container fluid style={{ padding: '20px 2.4vw' }}>
                {this.props.children}
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
