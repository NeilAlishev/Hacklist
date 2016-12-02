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

import Environment from '../environment/environment.js';
import Rest from '../rest/rest.js';
import HackathonsList from './hackathons_list.js';
import FiltrationForm from './filtration_form.js';
import HackathonFilters from '../util/hackathon_filters.js';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hackathonsToDisplay: undefined}

    this._onFiltrationCallback = this._onFiltrationCallback.bind(this);
  }

  componentDidMount() {
    let that = this;

    fetch(`${Environment.BASE_URL}${Rest.hack_list}`)
      .then((response) => response.json())
      .then((hack_list) => {
        that.setState({hackathonsToDisplay: hack_list.response})
      })
      .catch((error) => console.error(error))
      .done();
  }

  render() {
    let hackathonsToDisplay = this.state.hackathonsToDisplay

    if(!hackathonsToDisplay){
      // TODO: PUT SPINNER HERE.
      return <Text>No data yet</Text>;
    }

    return(
      <DrawerLayout
        ref={(drawer) => { this.drawer = drawer; }}
        drawerWidth={250}
        renderNavigationView={this._renderMenu.bind(this)}>

        <HackathonsList hackathonsToDisplay={hackathonsToDisplay} />

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

        <FiltrationForm onFiltration={this._onFiltrationCallback}/>

        <View style={styles.menuFooter}>
        </View>
      </View>
    )
  }

  _renderMenuButton() {
    return (
      <TouchableOpacity
        hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
        onPress={() => { this.drawer.openDrawer() }}
        style={styles.menuButtonContainer}>
        <Image
          style={styles.menuButton}
          source={require('../resources/images/menu-button.png')} />
      </TouchableOpacity>
    )
  }

  _onFiltrationCallback(filtrationQuery) {
    let filtrationResult = HackathonFilters
      .filterByQuery(
        this.state.hackathonsToDisplay,
        filtrationQuery
      )

    this.setState(
      {
        hackathonsToDisplay: filtrationResult
      }
    );

    this.drawer.closeDrawer();
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
