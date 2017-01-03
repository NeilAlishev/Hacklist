import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import Route from '../../enums/route';

import ChoosePage from './choose';
import GithubAuthPage from './github_auth';
import VkAuthPage from './vk_auth';
import MainPage from '../main';

export default class SignInPage extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: Route.choose}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
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
