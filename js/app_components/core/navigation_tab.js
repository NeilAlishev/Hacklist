import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Route from '../../enums/route';

export default class NavigationTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={onPressCallback.bind(this)}>
              <Text style={styles.navigationText}>{this.props.text}</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

function onPressCallback() {
  this.props.navigator.pop();
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: '#F0F0F0'
  },
  navigationText: {
    padding: 10,
    color: 'white'
  }
});
