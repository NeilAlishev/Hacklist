import React from 'react';
import {
  StyleSheet,
  Text,
  AsyncStorage,
  Navigator
} from 'react-native';

import ChoosePage from './auth/choose';
import GithubAuthPage from './auth/github_auth';
import VkAuthPage from './auth/vk_auth';
import MainPage from './main';
import Spinner from './helpers/spinner';

import Route from '../enums/route';

export default class InitialDispatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    AsyncStorage.getItem('client_token', (err, res) => {
      this.setState({
        token: res,
      });
    });
  }

  render() {
    const token = this.state.token;

    if(token === undefined) {
      return <Spinner/>
    }

    const initialRoute = token == null ? Route.chooseAuth : Route.main;
    return (
      <Navigator
        initialRoute={{id: initialRoute}}
        renderScene={navigatorRenderScene}
        configureScene={navigatorConfigureScene}/>
    );
  }
}

function navigatorRenderScene(route, navigator) {
  switch (route.id) {
    case Route.chooseAuth:
      return <ChoosePage navigator={navigator}/>;
    case Route.githubAuth:
      return <GithubAuthPage navigator={navigator}/>;
    case Route.vkAuth:
      return <VkAuthPage navigator={navigator}/>;
    case Route.main:
      return (<MainPage navigator={navigator}/>);
  }
}

function navigatorConfigureScene(route, routeStack) {
  if(route.id === Route.githubAuth || route.id === Route.vkAuth) {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  return Navigator.SceneConfigs.PushFromRight;
}
