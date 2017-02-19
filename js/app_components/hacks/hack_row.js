import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  Card
} from 'react-native-elements';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Route from '../../enums/route';
import DateUtil from '../../util/date_util.js';

export default class HackRow extends React.Component {
  render() {
    const hack = this.props.hack;
    const daysFromNow = DateUtil.getDaysFromNow(hack.date);

    return (
      <TouchableOpacity onPress={onPressCallback.bind(this)} activeOpacity={0.9}>
        <Card title={compoundTitle(hack)} image={{uri: hack.imageUrl}}>
          <View>
            <Text>
              <Text style={styles.titleText}>Организатор: </Text>
              <Text>{hack.organizer}</Text>
            </Text>
            <Text>
              <Text style={styles.titleText}>Город: </Text>
              <Text>{hack.city}</Text>
            </Text>
            <View style={styles.rowBlock}>
              <Text style={styles.daysFromNow}>
                <AwesomeIcon name='clock-o' size={15} color='gray'/>
                {' '}{daysFromNow}
              </Text>
                <MaterialIcon name='arrow-right' size={20} color='gray'/>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

function compoundTitle(hack) {
  if (hack.category === 'TOP') {
    return(
      <Text>
        <SimpleIcon name='fire' size={17} color='red'/>
        {' '}{hack.title}
      </Text>
    );
  }
  return hack.title;
}

function onPressCallback() {
  this.props.navigator.push({
    id: Route.hackPage,
    hack: this.props.hack
  });
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold'
  },
  daysFromNow: {
    color: 'gray'
  },
  rowBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  }
});
