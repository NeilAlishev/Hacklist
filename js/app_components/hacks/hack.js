import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import NavigationTab from '../core/navigation_tab';
import DateUtil from '../../util/date_util.js';
import CustomText from '../core/custom_text';

export default class HackPage extends React.Component {
  render() {
    const hack = this.props.hack;
    let dateTime = Platform.OS === 'ios' ? DateUtil.getDateTime(hack.date)
          : DateUtil.getDateTimeAndroid(hack.date);

    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: hack.imageUrl}} resizeMode='cover'
               style={styles.image}/>
        <TouchableOpacity style={[styles.backButton, iosPadding()]}
          onPress={() => this.props.navigator.pop()}
        >
          <Icon name='arrow-left' size={25} color='white'/>
        </TouchableOpacity>
        <View style={styles.header}>
          <CustomText style={styles.title}>{hack.title}</CustomText>
          <CustomText style={styles.org}>{hack.organizer}</CustomText>
        </View>

        <View style={styles.hr}/>

        <View style={styles.body}>
          <CustomText style={styles.description}>{hack.description}</CustomText>
          <View style={styles.info}>
            <Text>
              <MaterialIcon name='map-marker' size={20} color='#ff6666'/>
              {' '}
              <CustomText>г.{hack.city}, {hack.address}</CustomText>
            </Text>
            <Text style={{paddingLeft: 2}}>
              <AwesomeIcon name='clock-o' size={18} color='#ff6666'/>
              {' '}
              <CustomText>{dateTime}</CustomText>
            </Text>
            <TouchableOpacity
              style={styles.linkBlock}
              onPress={onPressCallback.bind(this)}
              activeOpacity={0.7}
            >
              <Text style={{color: '#ff6666', fontSize: 15}}>Зарегистрироваться </Text>
              <MaterialIcon name='arrow-right' size={20} color='#ff6666'/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

function onPressCallback() {
  Linking.openURL(this.props.hack.url);
}

function iosPadding() {
  if (Platform.OS === 'ios') {
    return {paddingTop: 10};
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 10
  },
  body: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: 10
  },
  title: {
    fontSize: 30
  },
  org: {
    fontSize: 15,
    color: 'gray',
    paddingVertical: 10
  },
  image: {
    alignSelf: 'stretch',
    height: 200
  },
  titleText: {
    fontWeight: 'bold'
  },
  linkBlock: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 5
  },
  info: {
    paddingTop: 10
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  description: {
    fontSize: 20
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#d7d7d7'
  }
});
