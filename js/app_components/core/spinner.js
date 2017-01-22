import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

export default class Spinner extends React.Component {
  render() {
    return (
      <ActivityIndicator
        animating={true}
        style={[styles.centering, {height: 80}]}
      />
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
