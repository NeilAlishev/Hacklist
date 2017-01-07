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

export default class HackathonRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hack = this.props.hack;
    let date = new Date(hack.date).toString();

    //NOTE Maybe we`ll use it
    const menu = (
      <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
      >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Off</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
      </MKIconToggle>
    );

    const theme = getTheme();
    return (
      <TouchableHighlight
        onPress={onPressCallback.bind(this)}
      >
        <View style={styles.container}>
          <View style={theme.cardStyle}>
            <Image source={require('../resources/images/elon.jpg')}
                   style={theme.cardImageStyle}/>
            <Text style={theme.cardTitleStyle}>Title: {hack.title}</Text>
            <View style={{padding : 15,}}>
              <Text style={[theme.cardContentStyle, {padding:0}]}>
                City: {hack.city}
              </Text>
            </View>
            {/* <View style={theme.cardMenuStyle}>{menu}</View>*/}
            <View style={theme.cardActionStyle}>
              <Text>
                Address: {hack.address} {'\n'}
                Date&Time: {date}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

function onPressCallback() {
  //TODO add navigation to hack-info page here
  console.log(this.props.hack);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 20
  }
});
