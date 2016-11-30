import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Form from 'tcomb-form-native';

import HackathonList from './hackathons_list.js';
import CityEnum from '../enums/city_enum.js';

// cities enumeration
const City = Form.enums(CityEnum);

// model for the form
const HackListFiltrationCriteria = Form.struct({
  city: City
});

// form itself
const FormObject = Form.form.Form

const formOptions = {
  fields: {
    city: {
      label: 'Город', nullOption: false
    }
  }
}

export default class FiltrationForm extends React.Component {
  constructor(props) {
    super(props);

    this._onFormSubmit = this._onFormSubmit.bind(this);
  }

  _onFormSubmit() {
    // passing filtration query object back to main_page component.
    this.props.onFiltration(this.refs.form.getValue())
  }

  render() {
    return(
      <View style={styles.formContainer}>
        <FormObject
          ref="form"
          type={HackListFiltrationCriteria}
          value={{city: 'all'}}
          options={formOptions}
        />
        <TouchableHighlight style={styles.formButton}
                            onPress={this._onFormSubmit}
                            underlayColor='#99d9f4'>
          <Text style={styles.formButtonText}>Применить</Text>
        </TouchableHighlight>
      </View>
    );
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
  }
});
