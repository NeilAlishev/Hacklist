import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <Image
        style={styles.logo}
        source={require('../../../resources/images/logo.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    flexGrow: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});
