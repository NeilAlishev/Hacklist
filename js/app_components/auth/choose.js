import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import Route from '../../enums/route';

export default class ChoosePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let authFailedText = null;
    if (this.props.error) {
      authFailedText = <Text>Auth failed :(</Text>;
    }
    return (
      <View style={styles.container}>
      {authFailedText}
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
    id: Route.githubAuth
  });
};

function vkAuth() {
  this.props.navigator.push({
    id: Route.vkAuth
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
