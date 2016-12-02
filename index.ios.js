import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainPage from
  './js/app_components/main_page.js';

export default class hacklist extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainPage />
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
