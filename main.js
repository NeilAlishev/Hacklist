import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import HackathonsWithFiltration from
  './app_components/hackathons_with_filtration.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HackathonsWithFiltration />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

Exponent.registerRootComponent(App);
