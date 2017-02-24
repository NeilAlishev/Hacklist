import React from 'react';
import {
  ListView,
  Platform,
  BackAndroid,
  StyleSheet
} from 'react-native';

import HackRow from './hack_row';
import Route from '../../enums/route';

export default class HackList extends React.Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener(
        'hardwareBackPress', backBtnCallback.bind(this)
      );
    }
  }

  render() {
    return (
      <ListView
        dataSource={dataSource.apply(this)}
        renderRow={renderRow.bind(this)}
        enableEmptySections={true}
        style={[styles.container, padding()]}/>
    );
  }
}

function backBtnCallback() {
  const nav = this.props.navigator;
  const routes = nav.getCurrentRoutes();
  const curRoute = routes[routes.length - 1];
  if (curRoute.id === Route.hackPage) {
    nav.pop();
    return true;
  }
  return false;
}

function dataSource() {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  return ds.cloneWithRows(this.props.hacks)
}

function renderRow(hack) {
  return <HackRow hack={hack} navigator={this.props.navigator}/>;
}

function padding() {
  if (Platform.OS === 'ios') {
    return {paddingTop: 35};
  } else {
    return {paddingTop: 15};
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'}
});
