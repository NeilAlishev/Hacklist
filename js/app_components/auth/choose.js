import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import Logo from '../helpers/auth/logo';
import SocialButtons from '../helpers/auth/social_buttons';

export default class ChoosePage extends React.Component {
  render() {
    let authFailedText = null;
    if (this.props.error) {
      authFailedText = <Text>Auth failed :(</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.logoBlock}>
          <Logo/>
        </View>

        <View style={styles.errorBlock}>
          {authFailedText}
        </View>

        <View style={styles.socialBlock}>
          <SocialButtons navigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoBlock: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#F0F8FF'
  }
});
