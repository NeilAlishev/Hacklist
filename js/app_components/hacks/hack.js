import React from 'react';
import {
  View,
  Image,
  Linking,
  StyleSheet,
  Text
} from 'react-native';

import NavigationTab from '../core/navigation_tab';
import Util from '../../util/util.js';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class HackPage extends React.Component {
  render() {
    const hack = this.props.hack;
    const date = Util.getDate(hack.date);

    return (
      <View style={styles.container}>
        <NavigationTab
          text={<Icon name='arrow-left' size={20} color='black' />}
          navigator={this.props.navigator}
        />

        <Image source={{uri: hack.imageUrl}} resizeMode='contain'
               style={styles.image}/>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>{hack.title}</Text>
        </View>

        <View style={styles.contentBlock}>
          <Text>{hack.description}</Text>

          <Text style={styles.titleText}>Где? </Text>
          <Text>г.{hack.city}, {hack.address}</Text>

          <Text style={styles.titleText}>Когда? </Text>
          <Text>{date}</Text>

          <Text style={styles.titleText}>Подробности здесь </Text>
          <Text style={styles.link} onPress={onPressCallback.bind(this)}>
            {hack.url}
          </Text>
        </View>
      </View>
    );
  }
}

function onPressCallback() {
  //NOTE иногда не открывает по первому нажатию
  //NOTE по-моему просто долго открывается
  Linking.openURL(this.props.hack.url);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    padding: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  titleBlock: {
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
    marginBottom: 0,
    backgroundColor: 'pink',
  },
  contentBlock: {
    padding: 15,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#F7F7F7',
    margin: 10,
    marginTop: 0
  },
  image: {
    alignSelf: 'stretch',
    height: 200
  },
  titleText: {
    fontWeight: 'bold'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
