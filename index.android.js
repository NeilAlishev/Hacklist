import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import AuthPage from './js/app_components/auth';
import MainPage from './js/app_components/main';
import Route from './js/enums/route';

export default class hacklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRoute: undefined
    };
    //TODO check if token is actual
    AsyncStorage.getItem('token', (err, res) => {
      this.setState({
        initialRoute: res == null ? Route.auth : Route.main
      });
    });
  }

  render() {
    const route = this.state.initialRoute;
    //TODO add spinner
    if (!route) {
      return <Text>Please, wait</Text>;
    }
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: route}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case Route.auth:
        return (<AuthPage navigator={navigator}/>);
      case Route.main:
        return (<MainPage navigator={navigator}/>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

AppRegistry.registerComponent('hacklist', () => hacklist);
