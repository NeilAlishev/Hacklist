import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import HackathonsList from './app_components/hackathons_list.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HackathonsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// when to use AppRegistry.registerComponent ?
Exponent.registerRootComponent(App);
