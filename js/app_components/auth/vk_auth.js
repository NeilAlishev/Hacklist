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
      // TODO: back button
      <WebView
        source={{uri: Environment.vkOAuth}}
        onNavigationStateChange={
          onNavigationStateChangeCallback.bind(this)
        }
        renderError={renderErrorCallback}
        startInLoadingState={true}
        contentInset={{top: 40, left: 0, bottom: 0, right: 0}}
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
