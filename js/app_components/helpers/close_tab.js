import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Route from '../../enums/route';

export default class CloseTab extends React.Component {
  render() {
    return (
      <View style={styles.topbar}>
          <TouchableOpacity onPress={onPressCallback.bind(this)}>
              <Text style={styles.topbarText}>{this.props.text}</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

function onPressCallback() {
  this.props.navigator.pop();
}

const styles = StyleSheet.create({
  topbar: {
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  topbarText: {
    color: 'white'
  }
});
