import React from 'react';
import {
  WebView,
  AsyncStorage,
  View,
  StyleSheet
} from 'react-native';

import AuthUtils from '../../util/auth_utils';

import Route from '../../enums/route';
import Environment from '../../environment/environment';

import NavigationTab from '../core/navigation_tab';

export default class GithubAuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_token: AuthUtils.generateUID()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationTab text={'Передумал'} navigator={this.props.navigator}/>

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

const styles = StyleSheet.create({
  container: {flex: 1}
});
