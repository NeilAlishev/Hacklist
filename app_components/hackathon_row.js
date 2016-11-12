import Exponent from 'exponent';
import React from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text
} from 'react-native';

export default class HackathonRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hack = this.props.data;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{hack.title}</Text>
        <Text style={styles.text}>{hack.city} - {hack.address}</Text>
        <Text style={styles.text}>at {hack.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
});
