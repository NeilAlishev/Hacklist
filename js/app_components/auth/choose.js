import React from 'react';
import {
  View,
  Text,
  Alert,
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
    if(this.props.error) {
      displayAlert();
    }

    return (
      <View style={styles.container}>
        <View style={styles.logoBlock}>
          <Logo/>
        </View>
        <SocialButtons navigator={this.props.navigator}/>
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

function displayAlert() {
  Alert.alert(
    'Упс!',
    'Что-то помешало нам авторизовать вас.\n' +
    'Дайте нам еще один шанс, пожалуйста!',
    [{ text: 'Хорошо!' }],
    { cancelable: false }
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  logoBlock: {
    alignItems: 'center',
    marginTop: 40
  }
});
