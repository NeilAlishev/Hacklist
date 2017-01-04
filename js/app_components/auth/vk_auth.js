import React from 'react';
import {
  WebView,
  AsyncStorage
} from 'react-native';

import Environment from '../../environment/environment';

export default class VkAuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  render() {
    return (
      <WebView
        source={{uri: Environment.vkOAuth}}
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
    let code = state.url.substr(codeIdx + codePattern.length);
    fetch(Environment.vkToken + code)
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
