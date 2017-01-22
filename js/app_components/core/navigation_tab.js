import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
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
    padding: 7,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  },
  navigationText: {
    padding: 7,
    color: '#545454'
  }
});
