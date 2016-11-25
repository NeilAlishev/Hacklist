import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Form from 'tcomb-form-native';

import HackathonList from './hackathons_list.js';

// cities enumeration
const City = Form.enums({
  all: 'Все города',
  kazan: 'Казань',
  moscow: 'Москва',
  saintPetersburg: 'Санкт-Петербург',
  novosib: 'Новосибирск'
});

// model for the form
const HackListFiltrationCriteria = Form.struct({
  city: City
});

// form itself
const FormObject = Form.form.Form

const formOptions =
{fields:
  {city:
    {label: 'Город', nullOption: false}
  }
}

export default class FiltrationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  _onFormSubmit() {
    // this method is called inside main_page.js when filtration happens
    // filtration results are passed as an argument
    // this.props.onFiltration()
  }

  render() {
    console.log("BEFORE")
    this.props.onFiltration()

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
