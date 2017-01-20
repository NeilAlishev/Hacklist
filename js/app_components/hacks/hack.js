import React from 'react';
import {
  View,
  Image,
  Linking,
  StyleSheet
} from 'react-native';
import {
  Text
} from 'react-native-elements';

import NavigationTab from '../helpers/navigation_tab';

export default class HackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hack = this.props.hack;
    const date = getDate(hack);

    return (
      <View style={styles.container}>
        <NavigationTab text={'Назад'} navigator={this.props.navigator}/>

        <Text h2 style={[styles.title, styles.padding]}>{hack.title}</Text>
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
          <Text style={styles.titleText}>
            Подробности здесь
          </Text>
          <Text style={styles.link} onPress={onPressCallback.bind(this)}>
            {hack.url}
          </Text>
        </Text>
      </View>
    );
  }
}

function getDate(hack) {
  const date = new Date(hack.date);
  //TODO format date
  return date.toLocaleDateString();
}

function onPressCallback() {
  //NOTE не работает
  const url = this.props.hack.url;
  Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
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
    alignSelf: 'center'
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
