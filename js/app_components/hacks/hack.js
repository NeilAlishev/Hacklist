import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import NavigationTab from '../helpers/navigation_tab';

export default class HackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hack = this.props.hack;
    let date = new Date(hack.date).toString();

    return (
      <View style={styles.container}>
        <NavigationTab text={'Назад'} navigator={this.props.navigator}/>
        <Text>Hack page!</Text>
        <Text>Title: {hack.title}</Text>
        <Text>Date: {date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
