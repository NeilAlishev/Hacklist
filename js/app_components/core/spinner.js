import React from 'react';
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default class Spinner extends React.Component {
  render() {
    return <ActivityIndicator animating={true} style={styles.spinner}/>
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
