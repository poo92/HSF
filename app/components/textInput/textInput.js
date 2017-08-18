import React from 'react';
import { View , TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const textInput = (props) => {
   const { placeholder , secureTextEntry = false, onChangeText } = props;
  return(
    <View>
      <TextInput
        style={Styles.textInput}
        {...props}
      />
    </View>
  )
};




textInput.PropTypes = {
  placeholder: PropTypes.string,
  secureInput: PropTypes.bool,
  onChangeText: PropTypes.func,

};

export default textInput;
