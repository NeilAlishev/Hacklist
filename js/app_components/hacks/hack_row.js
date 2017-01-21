import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme
} from 'react-native-material-kit';

import Route from '../../enums/route';
import Util from '../../util/util.js';

export default class HackRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hack = this.props.hack;
    const date = Util.getDate(hack.date);

    const theme = getTheme();
    return (
      <TouchableHighlight
        onPress={onPressCallback.bind(this)}
        underlayColor='white'
      >
        <View style={styles.container}>
          <View style={theme.cardStyle}>
            <Image source={{uri: hack.imageUrl}} resizeMode='contain'
                 style={theme.cardImageStyle}/>
            <Text style={[theme.cardContentStyle, styles.title]}>
              {hack.title}
            </Text>
            <View style={[theme.cardActionStyle, {padding: 10}]}>
              <Text>
                <Text style={styles.titleText}>Город: </Text>
                <Text>{hack.city}</Text>
              </Text>
              <Text>
                <Text style={styles.titleText}>Через: </Text>
                <Text>сколько-то дней</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

function onPressCallback() {
  this.props.navigator.push({
    id: Route.hackPage,
    hack: this.props.hack
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 20
  },
  title: {
    padding:10,
    fontSize: 25,
    fontStyle: 'italic'
  },
  titleText: {
    fontWeight: 'bold'
  }
});
