import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Card} from 'react-native-elements';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicon from 'react-native-vector-icons/Octicons';

import Route from '../../enums/route';
import DateUtil from '../../util/date_util.js';
import CustomText from '../core/custom_text';

export default class HackRow extends React.Component {
  render() {
    const hack = this.props.hack;
    const daysFromNow = DateUtil.getDaysFromNow(hack.date);

    return (
      <TouchableOpacity onPress={onPressCallback.bind(this)} activeOpacity={0.9}>
        <Card
          title={compoundTitle(hack)}
          image={{uri: hack.imageUrl}}
          containerStyle={{marginTop: 0, marginBottom: 15}}
        >
          <View>
            <View style={styles.body}>
              <Text>
                <Octicon name='organization' size={15}/>
                {' '}
                <CustomText>{hack.organizer}</CustomText>
              </Text>
              <Text>
                <MaterialIcon name='city' size={15}/>
                {' '}
                <CustomText>{hack.city}</CustomText>
              </Text>
            </View>

            <View style={styles.hr}/>

            <View style={styles.rowBlock}>
              <CustomText style={{color: 'gray'}}>
                <AwesomeIcon name='clock-o' size={15} color='gray'/>
                {' '}{daysFromNow}
              </CustomText>
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
  rowBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  body: {
    marginBottom: 5
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#d7d7d7'
  }
});
