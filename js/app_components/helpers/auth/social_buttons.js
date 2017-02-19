import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SocialButtons extends React.Component {
  render() {
    return(
      <View>
        <View style={{marginLeft: 20, marginRight: 20, marginTop: 20}}>
          <TouchableHighlight
            style={[styles.button, styles.vkButton]}
            onPress={vkAuth.bind(this)}
            underlayColor='#d2dbf2'
          >
            <View style={styles.inline}>
              <Text style={[styles.vkButtonText, styles.buttonBigText]}>
                Войти
              </Text>
              <Text style={styles.vkButtonText}> через </Text>
              <Icon name='vk' size={23} style={styles.vkIcon}/>
            </View>
          </TouchableHighlight>
        </View>

        <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
          <TouchableHighlight
            style={[styles.button, styles.githubButton]}
            onPress={githubAuth.bind(this)}
            underlayColor='#dddddd'
          >
            <View style={styles.inline}>
              <Text style={[styles.githubButtonText, styles.buttonBigText]}>
                Войти
              </Text>
              <Text style={styles.githubButtonText}> через </Text>
              <Icon name='github' size={23} style={styles.githubIcon}/>
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
  vkIcon: {
    marginTop: 2,
    color: '#3B5699'
  },
  githubIcon: {
    marginTop: 3,
    color: 'black'
  },
  buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inline: {
    flexDirection: 'row'
  }
});
