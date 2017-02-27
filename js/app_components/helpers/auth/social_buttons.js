import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SocialButtons extends React.Component {
  render() {
    return (
      <View>
        <View style={{marginLeft: 20, marginRight: 20, marginTop: 20}}>
          <TouchableHighlight
            style={[styles.button, styles.githubButton]}
            onPress={githubAuth.bind(this)}
            underlayColor='#dddddd'
          >
            <View style={styles.inline}>
              <Text style={[styles.githubButtonText, styles.buttonText]}>
                Войти
              </Text>
              <Text style={styles.githubButtonText}> через </Text>
              <Icon name='github'
                style={[styles.githubIcon, githubIconMargin()]}
              />
            </View>
          </TouchableHighlight>
        </View>

        <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
          <TouchableHighlight
            style={[styles.button, styles.vkButton]}
            onPress={vkAuth.bind(this)}
            underlayColor='#d2dbf2'
          >
            <View style={[styles.inline, {paddingLeft: 3}]}>
              <Text style={[styles.vkButtonText, styles.buttonText]}>
                Войти
              </Text>
              <Text style={styles.vkButtonText}> через </Text>
              <Icon name='vk' style={[styles.vkIcon, vkIconMargin()]}/>
            </View>
          </TouchableHighlight>
        </View>
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

function vkIconMargin() {
  if (Platform.OS === 'android') {
    return {marginTop: 2};
  }
}

function githubIconMargin() {
  if (Platform.OS === 'android') {
    return {marginTop: 3};
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 30
  },
  vkButton: {
    backgroundColor: '#edf0f8'
  },
  githubButton: {
    backgroundColor: '#f2f2f2'
  },
  vkButtonText: {
    fontSize: 20,
    color: '#3B5699'
  },
  githubButtonText: {
    fontSize: 20,
    color: 'black'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  vkIcon: {
    fontSize: 22,
    color: '#3B5699'
  },
  githubIcon: {
    fontSize: 23,
    color: 'black'
  },
  inline: {
    flexDirection: 'row'
  }
});
