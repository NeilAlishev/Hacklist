import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

export default class HackathonRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hack = this.props.rowData;
    let date = new Date(hack.date).toString();

    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(hack.title)}
      >
        <View style={styles.container}>
          <Image source={require('../resources/images/test_image.png')}
                 style={styles.logo}
          />
          <Text style={styles.text}>
            <Text style={styles.title}>{hack.title}{'\n'}</Text>
            <Text>Город: {hack.city}{'\n'}</Text>
            <Text>Дата проведения: {date}</Text>
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onPress(hackTitle) {
    console.log(hackTitle + ' pressed');
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  row: {
    padding: 10,
    height: 100,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 5
  },
  text: {
    paddingLeft: 10
  },
  title: {
    fontWeight: 'bold'
  }
});
