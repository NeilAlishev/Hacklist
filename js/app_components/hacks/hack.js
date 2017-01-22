import React from 'react';
import {
  View,
  Image,
  Linking,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationTab from '../core/navigation_tab';
import Util from '../../util/util.js';

export default class HackPage extends React.Component {
  render() {
    const hack = this.props.hack;
    const date = Util.getDate(hack.date);

    return (
      <View style={styles.container}>
        <NavigationTab
          text={<Icon name='arrow-left' size={20} color='black'/>}
          navigator={this.props.navigator}
        />

        <Image source={{uri: hack.imageUrl}} resizeMode='contain'
               style={styles.image}/>
        <Text style={styles.title}>{hack.title}</Text>

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
          <Text style={styles.titleText}>Подробности </Text>
          <Text style={styles.link} onPress={onPressCallback.bind(this)}>
            по ссылке
          </Text>
        </Text>
      </View>
    );
  }
}

function onPressCallback() {
  Linking.openURL(this.props.hack.url);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  padding: {
    paddingLeft: 5
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontStyle: 'italic'
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
