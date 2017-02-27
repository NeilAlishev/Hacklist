import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomText from '../core/custom_text';
import NavigationTab from '../core/navigation_tab';
import DateUtil from '../../util/date_util.js';

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
          <MaterialIcon name='arrow-left' size={25} color='white'/>
        </TouchableOpacity>
        <View style={styles.header}>
          <CustomText style={styles.title}>{hack.title}</CustomText>
          <CustomText style={styles.org}>{hack.organizer}</CustomText>
        </View>

        <View style={styles.hr}/>

        <View style={styles.body}>
          <CustomText style={styles.description}>
            {hack.description}
          </CustomText>
          <Text style={{marginBottom: 5}}>
            <MaterialIcon name='map-marker' size={19} color='#ff6666'/>
            <CustomText style={{color: 'gray'}}>
              {' '}г.{hack.city}, {hack.address}
            </CustomText>
          </Text>
          <Text style={{paddingLeft: 2}}>
            <AwesomeIcon name='calendar' size={17} color='#ff6666'/>
            <CustomText style={{color: 'gray'}}>
              {' '}{dateTime}
            </CustomText>
          </Text>
          <TouchableOpacity onPress={onPressCallback.bind(this)}
            style={styles.linkBlock} activeOpacity={0.7}
          >
          <CustomText style={{color: '#ff6666', fontSize: 15}}>
            Зарегистрироваться
          </CustomText>
          </TouchableOpacity>
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
    paddingTop: 5,
    paddingHorizontal: 10
  },
  body: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: 7
  },
  title: {
    fontSize: 20,
    color: '#4c4747'
  },
  org: {
    fontSize: 13,
    color: 'gray',
    paddingBottom: 7
  },
  image: {
    alignSelf: 'stretch',
    height: 200
  },
  linkBlock: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 5
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  description: {
    fontSize: 17,
    paddingBottom: 5,
    color: 'gray'
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#d7d7d7'
  }
});
