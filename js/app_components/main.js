import React from 'react';
import {
  Text
} from 'react-native';

import Environment from '../environment/environment';
import Api from '../enums/api';
import HackathonsList from './hackathons_list';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hacks: undefined
    }
  }

  componentWillMount() {
    fetch(Environment.BASE_URL + Api.hacks)
      .then(response => response.json())
      .then(data => {
        this.setState({
          hacks: data.response
        })
      })
      .catch((error) => console.error(error))
      .done();
  }

  render() {
    let hacks = this.state.hacks
    if (!hacks) {
      // TODO: PUT SPINNER HERE
      return <Text>No data yet</Text>;
    }
    return (
      <HackathonsList hacks={hacks}/>
    );
  }
}
