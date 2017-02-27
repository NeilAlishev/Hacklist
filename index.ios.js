import React from 'react';
import {
  AppRegistry
} from 'react-native';
import codePush from "react-native-code-push";

import InitialDispatcher from './js/app_components/initial_dispatcher';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};

export default class Hacklist extends React.Component {
  render() {
    return <InitialDispatcher/>;
  }
}

AppRegistry.registerComponent(
  'Hacklist', () => codePush(codePushOptions)(Hacklist));
