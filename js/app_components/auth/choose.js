import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import SocialButtons from '../helpers/social_buttons';

export default class ChoosePage extends React.Component {
  render() {
    let authFailedText = null;
    if (this.props.error) {
      authFailedText = <Text>Auth failed :(</Text>;
    }
    return (
      <View style={styles.container}>
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
  }
});
