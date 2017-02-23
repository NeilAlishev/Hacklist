import React from 'react';
import {
  Alert,
  NetInfo,
  Platform,
  Navigator,
  AsyncStorage
} from 'react-native';

import ChoosePage from './auth/choose';
import GithubAuthPage from './auth/github_auth';
import VkAuthPage from './auth/vk_auth';
import MainPage from './main';
import Spinner from './core/spinner';

import Route from '../enums/route';

export default class InitialDispatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setClientToken();
    checkInternetConn.apply(this);
  }

  render() {
    const conn = this.state.conn;
    const token = this.state.token;

    if(token === undefined || conn === undefined) {
      return <Spinner/>
    }

    if (!conn) {
      this.displayAlert();
      return null;
    }

    const initialRoute = token == null ? Route.chooseAuth : Route.main;
    return (
      <Navigator
        initialRoute={{id: initialRoute}}
        renderScene={navigatorRenderScene}
        configureScene={navigatorConfigureScene}/>
    );
  }

  setClientToken() {
    AsyncStorage.getItem('client_token', (err, res) => {
      this.setState({
        token: res
      });
    });
  }

  displayAlert() {
    Alert.alert(
      'Привет!',
      'Нужно подключение к интернету',
      [{
        text: 'Поехали!',
        onPress: checkInternetConn.bind(this)
      }],
      { cancelable: false }
    );
  }
}

function checkInternetConn() {
  if(Platform.OS === 'android') {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({
        conn: isConnected
      });
    });
  } else {
    NetInfo.addEventListener('change',
      (isConnected)=> {this.setState({conn: isConnected})}
    )
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
  if (route.id === Route.githubAuth || route.id === Route.vkAuth) {
    return Navigator.SceneConfigs.FloatFromBottom;
  }
  return Navigator.SceneConfigs.PushFromRight;
}
