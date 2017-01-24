import React from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import InitialDispatcher from './js/app_components/initial_dispatcher';

export default class Hacklist extends React.Component {
  render() {
    return <InitialDispatcher/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

AppRegistry.registerComponent('Hacklist', () => Hacklist);
