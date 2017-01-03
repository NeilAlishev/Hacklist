import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

export default class ChoosePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={githubAuth.bind(this)} style={styles.logo}>
        <Image
          style={styles.logo}
          source={require('../../resources/images/github.png')}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={vkAuth.bind(this)} style={styles.logo}>
        <Image
          style={styles.logo}
          source={require('../../resources/images/vk.png')}
        />
      </TouchableHighlight>
      </View>
    );
  }
}

function githubAuth() {
  this.props.navigator.push({
    id: 'githubAuth'
  });
};

function vkAuth() {
  this.props.navigator.push({
    id: 'vkAuth'
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 5
  }
});
