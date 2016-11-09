import Exponent from 'exponent';
import React from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text
} from 'react-native';

var Environment = require('../environment.js')

// import HackathonRow from 'HackathonRow';

export default class HackathonsList extends React.Component {
  constructor(props) {
    super(props);

    var base_url = Environment.BASE_URL

    fetch(base_url + '/hack/list.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        }
      )
      .catch((error) => console.error(error))
      .done();

    // values are hardcoded. Use fetch method to fetch data from API.
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['First hackahon',
                                    'Second hackathon',
                                    'Third Hackathon'])
    };
  }

  // Basic list rendering.
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        // Need to extract row logic to separate component(HackathonRow)
        renderRow={(data) => <View><Text>{data}</Text></View>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});
