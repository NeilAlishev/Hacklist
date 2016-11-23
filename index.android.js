import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HackathonsWithFiltration from
  './js/app_components/hackathons_with_filtration.js';

export default class hacklist extends React.Component {
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

AppRegistry.registerComponent('hacklist', () => hacklist);
