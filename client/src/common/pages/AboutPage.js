// ./app/views/js/components/common/AboutPage.js
import React from 'react';
import AppLayout from '../AppLayout';
import { Segment, Container, Grid, Message } from 'semantic-ui-react';
import Logo from '../Logo';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

class About extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      readme: {
        data: null,
        error: null
      },
      license: {
        data: null,
        error: null
      }
    };
  }

  componentWillMount () {
    axios.get('https://raw.githubusercontent.com/ironlota/Seleksi-2017/master/README.md')
    .then(res => this.setState({readme: {data: res.data}}))
    .catch(err => this.setState({readme: {error: err}}));

    axios.get('https://raw.githubusercontent.com/ironlota/Seleksi-2017/master/LICENSE.md')
    .then(res => this.setState({license: {data: res.data}}))
    .catch(err => this.setState({license: {error: err}}));
  }

  render () {
    return (
      <AppLayout section='notFound' inverted>
        <Segment inverted>
          <Grid columns='equal'>
            <Grid.Column>
              <Segment inverted />
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment inverted>
                <Logo />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment floated='right' inverted />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment inverted>
          <Container text>
            {
              !this.state.readme.error && this.state.readme.data &&
              <ReactMarkdown source={this.state.readme.data || ''} />}
            {
              this.state.readme.error && !this.state.readme.data &&
              <Message negative>
                <Message.Header>Error while fetching README.MD</Message.Header>
                <p>{this.state.readme.error.message}</p>
              </Message>
            }
          </Container>
        </Segment>
        <Segment inverted>
          <Container text>
            {
              !this.state.license.error && this.state.license.data &&
              <ReactMarkdown source={this.state.license.data || ''} />}
            {
              this.state.license.error && !this.state.license.data &&
              <Message negative>
                <Message.Header>Error while fetching LICENSE.MD</Message.Header>
                <p>{this.state.license.error.message}</p>
              </Message>
            }
          </Container>
        </Segment>
      </AppLayout>
    );
  }
}

export default About;
