import React from 'react';
import {
  ListView
} from 'react-native';

import HackathonRow from './hack_row';

export default class HackathonList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListView
        dataSource={dataSource.apply(this)}
        renderRow={renderRow}
        enableEmptySections={true}/>
    );
  }
}

function dataSource() {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  return ds.cloneWithRows(this.props.hacks)
}

function renderRow(hack) {
  return <HackathonRow hack={hack}/>;
}
