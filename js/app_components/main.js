import React from 'react';
import {
  Text,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import Environment from '../environment/environment';
import Api from '../enums/api';
import HackathonsList from './hackathons_list';

import ErrorPage from './helpers/error_page';
import Spinner from './helpers/spinner';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hacks: undefined
    }

    AsyncStorage.getItem('client_token', (err, token) => {
      fetch(Environment.BASE_URL + Api.hacks + token)
        .then(response => response.json())
        .then(data => {
          this.setState({
            hacks: data.response,
            errorMessage: data.errorMessage
          });
        })
        .catch((error) => console.error(error))
        .done();
    });
  }

  render() {
    let hacks = this.state.hacks
    let errorMessage = this.state.errorMessage

    if (!hacks) {
      if(errorMessage) {
        return <ErrorPage message={errorMessage}/>
      } else {
        return <Spinner/>
      }
    }
    return (
      <HackathonsList hacks={hacks}/>
    );
  }
}
