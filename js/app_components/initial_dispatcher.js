import React from 'react';
import {
  StyleSheet,
  Text,
  AsyncStorage,
  Navigator
} from 'react-native';

import Route from '../enums/route';

import ChoosePage from './auth/choose';
import GithubAuthPage from './auth/github_auth';
import VkAuthPage from './auth/vk_auth';
import MainPage from './main';

import Spinner from './spinner';

export default class InitialDispatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: undefined
    };

    //TODO check if token is actual
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

    const initialRoute = token == null ? Route.choose : Route.main;
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: initialRoute}}
        renderScene={navigatorRenderScene}/>
    );
  }
}

function navigatorRenderScene(route, navigator) {
  switch (route.id) {
    case Route.choose:
      return <ChoosePage navigator={navigator}/>;
    case Route.githubAuth:
      return <GithubAuthPage navigator={navigator}/>;
    case Route.vkAuth:
      return <VkAuthPage navigator={navigator}/>;
    case Route.main:
      return (<MainPage navigator={navigator}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
