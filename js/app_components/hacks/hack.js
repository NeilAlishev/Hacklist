import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import CloseTab from '../helpers/close_tab';

export default class HackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hack = this.props.hack;
    let date = new Date(hack.date).toString();

    return (
      <View style={styles.container}>
        <CloseTab text={'Назад'} navigator={this.props.navigator}/>
        <Text>Hack page!</Text>
        <Text>Title: {hack.title}</Text>
        <Text>Date: {date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#DCDCDC'
  }
});
