import React from 'react';
import {
  Text,
  AsyncStorage
} from 'react-native';

import Environment from '../environment/environment';
import Api from '../enums/api';
import HackathonsList from './hackathons_list';
import ErrorPage from './error_page';

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
          if(data.errorMessage) {
            this.setState({
              hacks: null,
              errorMessage: data.errorMessage
            });
          } else {
            this.setState({
              hacks: data.response,
              errorMessage: null
            });
          }
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
        // TODO: PUT SPINNER HERE
        return <Text>No data yet</Text>;
      }
    }
    return (
      <HackathonsList hacks={hacks}/>
    );
  }
}
