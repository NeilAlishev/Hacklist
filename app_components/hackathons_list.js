import React from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text
} from 'react-native';

import HackathonRow from './hackathon_row.js';
import Environment from '../environment/environment.js';
import Rest from '../rest/rest.js';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class HackathonsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }

    this._makeRequest();
  }

  render() {
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>
    }
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <HackathonRow data={data}/>}
      />
    );
  }

  _makeRequest() {
    fetch(Environment.BASE_URL + Rest.hack_list)
      .then((response) => response.json())
      .then((hack_list) => {
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(hack_list.response)
        });
      })
      .catch((error) => console.error(error))
      .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});
