import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class ErrorBlock extends React.Component {
  render() {
    if(this.props.error) {
      return(
        <View style={styles.errorBlock}>
          <Text style={styles.errorMessage}>
            Что-то помешало нам авторизовать вас.
            Дайте нам еще один шанс, пожалуйста!
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  errorBlock: {
    alignItems: 'center',
    padding: 10,
    margin: 30,
    marginBottom: 0
  },
  errorMessage: {
    color: '#ff6666'
  }
});
