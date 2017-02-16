import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  Platform,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationTab from '../core/navigation_tab';
import DateUtil from '../../util/date_util.js';

export default class HackPage extends React.Component {
  render() {
    const hack = this.props.hack;
    let dateTime = Platform.OS === 'ios' ? DateUtil.getDateTime(hack.date)
          : DateUtil.getDateTimeAndroid(hack.date);

    return (
      <View style={styles.container}>
        <NavigationTab
          text={<Icon name='arrow-left' size={20} color='black'/>}
          navigator={this.props.navigator}
        />

        <Image source={{uri: hack.imageUrl}} resizeMode='contain'
               style={styles.image}/>
        <Text style={styles.title}>{hack.title}</Text>
        <Text style={styles.org}>{hack.organizer}</Text>

        <View style={styles.body}>
          <Text>{hack.description}</Text>
          <View style={styles.info}>
            <Text>
              <Text style={styles.titleText}>Где? </Text>
              <Text>г.{hack.city}, {hack.address}</Text>
            </Text>
            <Text>
              <Text style={styles.titleText}>Когда? </Text>
              <Text>{dateTime}</Text>
            </Text>
            <Text>
              <Text style={styles.titleText}>Подробности </Text>
              <Text style={styles.link} onPress={onPressCallback.bind(this)}>
                по ссылке
              </Text>
            </Text>
          </View>
        </View>
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
  body: {
    padding: 5
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontStyle: 'italic'
  },
  org: {
    alignSelf: 'center',
    fontSize: 15,
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
  },
  info: {
    paddingTop: 5
  }
});
