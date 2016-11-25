import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

import HackathonsList from './hackathons_list.js';
import FiltrationForm from './filtration_form.js';

export default class HackathonsWithFiltration extends React.Component {
  render() {
    return(
      <DrawerLayout
        ref={(view) => { this._drawerLayout = view; }}
        drawerWidth={250}
        renderNavigationView={this._renderMenu.bind(this)}>

        <HackathonsList />

        {this._renderMenuButton()}
      </DrawerLayout>
    );
  }

  _renderMenu() {
    return (
      <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
        <View style={styles.menuHeader}>
          <View style={styles.menuHeaderOverlay} />
            <Text style={styles.menuHeaderText}>
              Фильтрация хакатонов
            </Text>
        </View>

        <FiltrationForm />

        <View style={styles.menuFooter}>
        </View>
      </View>
    )
  }

  _renderMenuButton() {
    return (
      <TouchableOpacity
        hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
        onPress={() => { this._drawerLayout.openDrawer() }}
        style={styles.menuButtonContainer}>
        <Image
          style={styles.menuButton}
          source={require('../resources/images/menu-button.png')} />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuHeader: {
    height: 150,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  menuHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menuHeaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  menuHeaderText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  menuFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  menuButtonContainer: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
  menuButton: {
    width: 25.5,
    height: 17.5,
  }
});
