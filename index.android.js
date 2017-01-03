import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import SignInPage from './js/app_components/auth/sign_in';
import MainPage from './js/app_components/main';

export default class hacklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextComponent: undefined
    };
    //TODO check if token is actual
    AsyncStorage.getItem('token', (err, res) => {
      console.log('token: ', res);
      this.setState({
        nextComponent: res == null ? <SignInPage/> : <MainPage/>
      });
    });
  }

  render() {
    const nextComponent = this.state.nextComponent;
    // TODO add spinner
    if (!nextComponent) {
      return <Text>Please, wait</Text>;
    }
    return nextComponent;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

AppRegistry.registerComponent('hacklist', () => hacklist);
