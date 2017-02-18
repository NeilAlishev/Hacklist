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

import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import Route from '../../enums/route';
import DateUtil from '../../util/date_util.js';

export default class HackRow extends React.Component {
  render() {
    const hack = this.props.hack;
    const daysFromNow = DateUtil.getDaysFromNow(hack.date);

    return (
      <Card title={compoundTitle(hack)} image={{uri: hack.imageUrl}}>
        <View style={styles.container}>
          <Text>
            <Text style={styles.titleText}>Организатор: </Text>
            <Text>{hack.organizer}</Text>
          </Text>
          <Text>
            <Text style={styles.titleText}>Город: </Text>
            <Text>{hack.city}</Text>
          </Text>
          <Text style={styles.daysFromNow}>
            <Icon name='clock-o' size={15} color='gray'/>
            {' '}
            {daysFromNow}
          </Text>
        </View>
        <Button iconRight
          icon={{name: 'forward'}}
          title='Подробности'
          backgroundColor='#B8B8B8'
          buttonStyle={styles.button}
          onPress={onPressCallback.bind(this)}/>
      </Card>
    );
  }
}

function compoundTitle(hack) {
  if (hack.category === 'TOP') {
    return(
      <Text>
        <SimpleLineIcon name='fire' size={17} color='red'/>
        {' '}
        {hack.title}
      </Text>
    );
  } else {
    return hack.title;
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
    marginTop: 5,
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  daysFromNow: {
    marginTop: 5,
    color: 'gray'
  }
});
