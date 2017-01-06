import React from 'react';
import {
  AppRegistry
} from 'react-native';

import InitialDispatcher from './js/app_components/initial_dispatcher';

export default class hacklist extends React.Component {
  render() {
    return <InitialDispatcher/>;
  }
}

AppRegistry.registerComponent('hacklist', () => hacklist);
