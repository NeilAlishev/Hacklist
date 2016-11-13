import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import HackathonRow from './hackathon_row.js';
import Environment from '../environment/environment.js';
import Rest from '../rest/rest.js';

var GiftedListView = require('react-native-gifted-listview');
var that;

export default class HackathonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  _onFetch(page = 1, callback, options) {
    fetch(`${Environment.BASE_URL}${Rest.hack_list}?page=${page}`)
      .then((response) => response.json())
      .then((hack_list) => {
        console.log(hack_list.response.length)

        if (hack_list.response.length === 0) {
          callback(hack_list.response, {
            allLoaded: true
          });
        } else {
          callback(hack_list.response);
        }
      })
      .catch((error) => console.error(error))
      .done();
  }

  _renderRowView(rowData) {
    return (
      <HackathonRow rowData={rowData}/>
    );
  }

  _renderSeparatorView() {
    return (
      <View style={customStyles.separator} />
    );
  }

  _renderEmptyView(refreshCallback) {
    return (
      <View style={customStyles.defaultView}>
        <Text style={customStyles.defaultViewTitle}>
          Sorry, there is no content to display
        </Text>

        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={refreshCallback}
        >
          <Text>
            ↻
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  // _renderRefreshableWaitingView(refreshCallback) {
  //   if (Platform.OS !== 'android') {
  //     return (
  //       <View style={customStyles.refreshableView}>
  //         <Text style={customStyles.actionsLabel}>
  //           ↓
  //         </Text>
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <TouchableHighlight
  //         underlayColor='#c8c7cc'
  //         onPress={refreshCallback}
  //         style={customStyles.refreshableView}
  //       >
  //         <Text style={customStyles.actionsLabel}>
  //           ↻
  //         </Text>
  //       </TouchableHighlight>
  //     );
  //   }
  // }

  // _renderRefreshableWillRefreshView() {
  //   return (
  //     <View style={customStyles.refreshableView}>
  //       <Text style={customStyles.actionsLabel}>
  //         ↻
  //       </Text>
  //     </View>
  //   );
  // }

  // _renderRefreshableFetchingView() {
  //   return (
  //     <View style={customStyles.refreshableView}>
  //       <GiftedSpinner />
  //     </View>
  //   );
  // }

  render() {
    that = this;

    return (
      <View>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>Hacklist</Text>
        </View>

        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true}

          pagination={true}

          refreshable={true}
          refreshableViewHeight={50}
          refreshableDistance={40}
          // refreshableFetchingView={this._renderRefreshableFetchingView}
          // refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
          // refreshableWaitingView={this._renderRefreshableWaitingView}
          refreshableTintColor="black"

          customStyles={customStyles}

          renderSeparator={this._renderSeparatorView}

          emptyView={this._renderEmptyView}

          // rowHasChanged={(r1,r2)=>{
          //   r1.id !== r2.id
          // }}

          // distinctRows={(rows)=>{
          //   var indentitis = {};
          //   var newRows = [];
          //   for(var i = 0;i<rows.length; i++){
          //     if(indentitis[rows[i].id]){

          //     }else{
          //       indentitis[rows[i].id]=true;
          //       newRows.push(rows[i]);
          //     }
          //   }
          //   return newRows;
          // }}
        />
      </View>
    );
  }
}

const customStyles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#CCC'
  },
  refreshableView: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsLabel: {
    fontSize: 20,
    color: '#007aff',
  },
  paginationView: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  defaultView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  defaultViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  row: {
    padding: 10,
    height: 44,
  },
  header: {
    backgroundColor: '#50a4ff',
    padding: 10,
  },
  headerTitle: {
    color: '#fff',
  }
});

const styles = StyleSheet.create({
  navBar: {
    height: 64,
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 12,
  },
  row: {
    padding: 10,
    height: 44,
  }
});
