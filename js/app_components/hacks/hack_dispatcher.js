import React from 'react';
import {
  Navigator,
  AsyncStorage
} from 'react-native';

import HackPage from './hack';
import HackList from './hack_list';

import Route from '../../enums/route';

export default class HackDispatcher extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          id: Route.hackList,
          hacks: this.props.hacks
        }}
        renderScene={navigatorRenderScene}/>
    );
  }
}

function navigatorRenderScene(route, navigator) {
  switch (route.id) {
    case Route.hackList:
      return <HackList hacks={route.hacks} navigator={navigator}/>;
    case Route.hackPage:
      return <HackPage hack={route.hack} navigator={navigator}/>;
  }
}
