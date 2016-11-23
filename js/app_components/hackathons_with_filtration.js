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
import Form from 'tcomb-form-native';

import HackathonsList from './hackathons_list.js';

const City = Form.enums({
  all: 'Все города',
  kazan: 'Казань',
  moscow: 'Москва',
  saintPetersburg: 'Санкт-Петербург',
  novosib: 'Новосибирск'
});

const HackListFiltrationCriteria = Form.struct({
  city: City
});

const FormObject = Form.form.Form
const formOptions =
{fields:
  {city:
    {label: 'Город', nullOption: false}
  }
}

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

        <View style={styles.formContainer}>
          <FormObject
            ref="form"
            type={HackListFiltrationCriteria}
            value={{city: 'all'}}
            options={formOptions}
          />
          <TouchableHighlight style={styles.formButton} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.formButtonText}>Применить</Text>
          </TouchableHighlight>
        </View>

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
  formContainer: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  formButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  formButton: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
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