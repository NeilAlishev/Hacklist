import Exponent from 'exponent';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

export default class HackathonRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hack = this.props.rowData;

    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(hack.title)}
      >
        <Text>{hack.title} - {hack.city} - {hack.address}</Text>
      </TouchableHighlight>
    );
  }

  _onPress(rowData) {
    console.log(rowData+' pressed');
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    height: 44,
  }
});
