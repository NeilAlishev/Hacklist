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
      auth: false
    };
  }

  render() {
    let requestUri = Environment.githubOAuth + Environment.githubClientId;
    return (
      <WebView
        source={{uri: requestUri}}
        onNavigationStateChange={
          onNavigationStateChangeCallback.bind(this)
        }
        renderError={renderErrorCallback.bind(this)}
      />
    );
  }
}

function onNavigationStateChangeCallback(state) {
  let codePattern = 'code=';
  let codeIdx = state.url.search(codePattern);
  if (!this.state.auth && codeIdx != -1) {
    this.setState({
      auth: true
    });
    fetch(Environment.githubToken, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: Environment.githubClientId,
        client_secret: Environment.githubSecret,
        code: state.url.substr(codeIdx + codePattern.length)
      })
    })
    .then(response => response.json())
    .then(token => {
      AsyncStorage.setItem('token', JSON.stringify(token));
      this.props.navigator.resetTo({
        id: 'main'
      });
    })
    .catch((error) => console.error(error))
    .done();
  }
}

// temporary workaround
function renderErrorCallback() {
  return null;
}
