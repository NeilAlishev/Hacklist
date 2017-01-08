import React from 'react';
import {
  WebView,
  AsyncStorage
} from 'react-native';

import Environment from '../../environment/environment';

export default class GithubAuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_token: guid()
    }
  }

  render() {
    return (
      // TODO: back button
      <WebView
        source={{uri: buildUri(this.state.client_token)}}
        onNavigationStateChange={
          onNavigationStateChangeCallback.bind(this)
        }
        startInLoadingState={true}
        contentInset={{top: 40, left: 0, bottom: 0, right: 0}}
      />
    );
  }
}

function guid() {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, c => {
    const r = Math.random()*16|0;
    const v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

function buildUri(client_token) {
  return Environment.githubOAuth + 'state=' + client_token;
}

function onNavigationStateChangeCallback(state) {
  const redirect = state.url.search('code') !== -1;
  if (redirect) {
    AsyncStorage.setItem(
      'client_token', JSON.stringify(this.state.client_token)
    );
    this.props.navigator.resetTo({
      id: 'main'
    });
  }
}
