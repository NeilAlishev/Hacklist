import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class ErrorBlock extends React.Component {
  render() {
    return(
      <View style={styles.errorBlock}>
        <Text style={styles.errorMessage}>
          Что-то помешало нам авторизовать вас.
          Дайте нам еще один шанс, пожалуйста!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorBlock: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  errorMessage: {
    color: '#ff6666'
  }
});
