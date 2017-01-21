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

export default class HackPage extends React.Component {
  render() {
    const hack = this.props.hack;
    const date = Util.getDate(hack.date);

    return (
      <View style={styles.container}>
        <NavigationTab text={'Назад'} navigator={this.props.navigator}/>

        <Text style={[styles.title, styles.padding]}>{hack.title}</Text>
        <Image source={{uri: hack.imageUrl}} resizeMode='contain'
               style={styles.image}/>
        <Text style={styles.padding}>{hack.description}</Text>
        <Text style={styles.padding}>
          <Text style={styles.titleText}>Где? </Text>
          <Text>г.{hack.city}, {hack.address}</Text>
        </Text>
        <Text style={styles.padding}>
          <Text style={styles.titleText}>Когда? </Text>
          <Text>{date}</Text>
        </Text>
        <Text style={styles.padding}>
          <Text style={styles.titleText}>Подробности здесь </Text>
          <Text style={styles.link} onPress={onPressCallback.bind(this)}>
            {hack.url}
          </Text>
        </Text>
      </View>
    );
  }
}

function onPressCallback() {
  //NOTE иногда не открывает по первому нажатию
  Linking.openURL(this.props.hack.url);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  padding: {
    paddingLeft: 5
  },
  title: {
    alignSelf: 'center',
    fontSize: 30
  },
  image: {
    borderRadius: 20,
    alignSelf: 'stretch',
    height: 200,
    margin: 5
  },
  titleText: {
    fontWeight: 'bold'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
