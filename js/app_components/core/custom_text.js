import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

export default class CustomText extends React.Component {
  render() {
    return (
      <Text style={[this.props.style, styles.customFont]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'MyriadPro-Regular'
  }
});
