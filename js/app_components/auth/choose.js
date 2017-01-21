import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  BackAndroid
} from 'react-native';

import Route from '../../enums/route';
import Logo from '../helpers/auth/logo';
import SocialButtons from '../helpers/auth/social_buttons';

export default class ChoosePage extends React.Component {

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener(
        'hardwareBackPress', backBtnCallback.bind(this)
      );
    }
  }

  render() {
    let authFailedText = null;
    if (this.props.error) {
      authFailedText = <Text>Auth failed :(</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.logoBlock}>
          <Logo/>
        </View>

        <View style={styles.errorBlock}>
          {authFailedText}
        </View>

        <View style={styles.socialBlock}>
          <SocialButtons navigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
}

function backBtnCallback() {
  const nav = this.props.navigator;
  const routes = nav.getCurrentRoutes();
  const curRoute = routes[routes.length - 1];
  if (curRoute.id === Route.githubAuth || curRoute.id === Route.vkAuth) {
    nav.pop();
    return true;
  }
  return false;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoBlock: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#F0F8FF'
  }
});
