import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import {
  Card,
  Button
} from 'react-native-elements';

import Route from '../../enums/route';
import Util from '../../util/util.js';

export default class HackRow extends React.Component {
  render() {
    const hack = this.props.hack;
    const date = Util.getDate(hack.date);

    return (
      <Card title={hack.title} image={{uri: hack.imageUrl}}>
        <View style={styles.container}>
          <Text>
            <Text style={styles.titleText}>Город: </Text>
            <Text>{hack.city}</Text>
          </Text>
          <Text>
            <Text style={styles.titleText}>Через: </Text>
            <Text>сколько-то дней</Text>
          </Text>
        </View>
        <Button iconRight
          icon={{name: 'forward'}}
          title='Подробности там'
          backgroundColor='#5abfed'
          underlayColor='#03A9F4'
          buttonStyle={styles.button}
          onPress={onPressCallback.bind(this)}/>
      </Card>
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
    marginBottom: 10
  },
  titleText: {
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});
