import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import AuthPage from './js/app_components/auth';
import MainPage from './js/app_components/main_page';

export default class hacklist extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: 'auth'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'auth':
        return (<AuthPage navigator={navigator}/>);
      case 'main':
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
