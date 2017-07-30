// ./app/views/js/components/common/AboutPage.js
import React from 'react';
import AppLayout from '../AppLayout';
import { Segment, Container, Grid, Message } from 'semantic-ui-react';
import Logo from '../Logo';
import ReactMarkdown from 'react-markdown';

class About extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      readme: null,
      license: null
    };
  }

  componentWillMount () {
    fetch('https://raw.githubusercontent.com/ironlota/Seleksi-2017/master/README.md')
    .then((data) => data.text())
    .then((res) => this.setState({readme: res}))
    .catch(err => (err));

    fetch('https://raw.githubusercontent.com/ironlota/Seleksi-2017/master/LICENSE.md')
    .then((data) => data.text())
    .then((res) => { console.log(res); this.setState({license: res}); })
    .catch(err => (err));
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
            {this.state.readme && this.state.readme !== '404: Not Found' && <ReactMarkdown source={this.state.readme ? this.state.readme : ''} />}
            {
              this.state.readme && this.state.readme === '404: Not Found' &&
              <Message negative>
                <Message.Header>README.MD not found!</Message.Header>
                <p>Make sure your link is valid</p>
              </Message>
            }
            {
              !this.state.readme &&
              <Message negative>
                <Message.Header>Cannot fetch README.MD</Message.Header>
                <p>Check your internet connection</p>
              </Message>
            }
          </Container>
        </Segment>
        <Segment inverted>
          <Container text>
            {this.state.license && this.state.license !== '404: Not Found' && <ReactMarkdown source={this.state.license ? this.state.license : ''} />}
            {
              this.state.license && this.state.license === '404: Not Found' &&
              <Message negative>
                <Message.Header>LICENSE.MD not found!</Message.Header>
                <p>Make sure your link is valid</p>
              </Message>
            }
            {
              !this.state.license &&
              <Message negative>
                <Message.Header>Cannot fetch LICENSE.MD</Message.Header>
                <p>Check your internet connection</p>
              </Message>
            }
          </Container>
        </Segment>
      </AppLayout>
    );
  }
}

export default About;
