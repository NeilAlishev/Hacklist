import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <View style={styles.centering}>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
