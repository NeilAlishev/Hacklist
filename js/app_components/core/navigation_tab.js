import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Route from '../../enums/route';

export default class NavigationTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigator.pop()}>
              <Text style={padding()}>
                {this.props.text}
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

function padding() {
  if (Platform.OS === 'ios') {
    return {paddingTop: 15, paddingLeft: 7};
  }
  return {paddingLeft: 9};
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  }
});
