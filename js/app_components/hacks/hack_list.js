import React from 'react';
import {
  ListView,
  Platform,
  StyleSheet,
  BackAndroid
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
    this.state = {
      rowCount: 0
    }
  }

  render() {
    return (
      <ListView
        dataSource={dataSource.apply(this)}
        renderRow={renderRow.bind(this)}
        enableEmptySections={true}
        style={styles.list}/>
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
  const firstRow = this.state.rowCount % this.props.hacks.length === 0;
  let margin = firstRow ? getMargin() : 0;
  const style = {
    marginTop: margin,
    marginBottom: 15
  }
  this.state.rowCount++;
  return <HackRow hack={hack} navigator={this.props.navigator} style={style}/>;
}

function getMargin() {
  return Platform.OS === 'android' ? 15 : 35;
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  }
});
