import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Navigator
} from 'react-native';

import Route from '../enums/route';

import ChoosePage from './auth/choose';
import GithubAuthPage from './auth/github_auth';
import VkAuthPage from './auth/vk_auth';
import MainPage from './main';

export default class InitialDispatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    //TODO check if token is actual
    AsyncStorage.getItem('token', (err, res) => {
      this.setState({
        token: res,
        isLoading: false
      });
    });
  }

  render() {
    if(this.state.isLoading) {
      // TODO: add spinner here.
      return (
        <View><Text>Loading...</Text></View>
      );
    } else {
      let initialRoute = this.state.token == null ? Route.choose : Route.main

      return (
        <Navigator
          style={styles.container}
          initialRoute={{id: initialRoute}}
          renderScene={this._navigatorRenderScene}/>
      );
    }
  }

  _navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case Route.choose:
        return <ChoosePage navigator={navigator}/>;
      case Route.githubAuth:
        return <GithubAuthPage navigator={navigator} />;
      case Route.vkAuth:
        return <VkAuthPage navigator={navigator} />;
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
