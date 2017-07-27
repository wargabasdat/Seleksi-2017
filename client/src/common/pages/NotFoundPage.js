// ./app/views/js/components/common/AboutPage.js
import React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppLayout from '../AppLayout';

class NotFoundPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modalOpen: true };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose (e) {
    this.setState({
      modalOpen: false
    });
  }

  render () {
    return (
      <AppLayout section='notFound'>
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          dimmer='blurred'
          size='small'
        >
          <Header icon='browser' content='404 Not Found' />
          <Modal.Content>
            <h2>Whoops! Relax dude!</h2><br />
            <h3>This page is invalid, we will redirect you back to home</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button link as={Link} to='/' color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
      </AppLayout>
    );
  }
}

export default NotFoundPage;
