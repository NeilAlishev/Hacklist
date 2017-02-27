import React from 'react';
import {
  AsyncStorage
} from 'react-native';

import Spinner from './core/spinner';
import ChoosePage from './auth/choose';
import HackDispatcher from './hacks/hack_dispatcher';

import Api from '../enums/api';
import Environment from '../environment/environment';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getHacks();
  }

  render() {
    const hacks = this.state.hacks;
    const error = this.state.error;

    if (hacks) {
      return <HackDispatcher hacks={hacks}/>;
    }
    if (error) {
      return <ChoosePage navigator={this.props.navigator} error={true}/>;
    }
    return <Spinner/>;
  }

  getHacks() {
    AsyncStorage.getItem('client_token', (err, token) => {
      token = JSON.parse(token);
      fetch(Environment.BASE_URL + Api.hacks + token)
        .then(response => response.json())
        .then(resp => {
          this.setState({
            hacks: resp.data,
            error: resp.error
          });
        })
        .catch((error) => console.error(error))
        .done();
    });
  }
}
