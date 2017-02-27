import React from 'react';
import {
  View,
  WebView,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import NavigationTab from '../core/navigation_tab';

import AuthUtil from '../../util/auth_util';
import Route from '../../enums/route';
import Environment from '../../environment/environment';

export default class GithubAuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_token: AuthUtil.generateUID()
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationTab
          text={<Icon name='md-close' size={20} color='black'/>}
          navigator={this.props.navigator}
        />

        <WebView
          source={{uri: buildUri(this.state.client_token)}}
          onNavigationStateChange={
            onNavigationStateChangeCallback.bind(this)
          }
          startInLoadingState={true}
          style={{flex: 1}}
        />
      </View>
    );
  }
}

function buildUri(client_token) {
  return Environment.githubOAuth + 'state=' + client_token;
}

function onNavigationStateChangeCallback(state) {
  const redirect = state.url.search('code=') !== -1;
  if (redirect) {
    AsyncStorage.setItem(
      'client_token', JSON.stringify(this.state.client_token)
    );
    this.props.navigator.resetTo({
      id: Route.main
    });
  }
}
