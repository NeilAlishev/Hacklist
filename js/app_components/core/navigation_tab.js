import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import Route from '../../enums/route';

export default class NavigationTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={onPressCallback.bind(this)}>
              <Text style={iosPadding()}>
                {this.props.text}
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

function onPressCallback() {
  this.props.navigator.pop();
}

function iosPadding() {
  if (Platform.OS === 'ios') {
    return {paddingTop: 13, paddingLeft: 7};
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  }
});
