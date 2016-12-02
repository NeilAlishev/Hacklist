import React from 'react';
import {
  Text
} from 'react-native';

import Environment from '../environment/environment.js';
import Rest from '../rest/rest.js';
import HackathonsList from './hackathons_list.js';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hackathonsToDisplay: undefined}
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
      // TODO: PUT SPINNER HERE
      return <Text>No data yet</Text>;
    }

    return(
      <HackathonsList hackathonsToDisplay={hackathonsToDisplay} />
    );
  }
}
