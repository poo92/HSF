// text input               params- placeholder,secureTextEntry,ontextchange
import React from 'react';
import { View , TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const textInput = (props) => {
   const { placeholder , secureTextEntry = false, onChangeText  } = props;
  return(
    <View>
      <TextInput
        style={Styles.textInput}
        placeholderTextColor="#9b9b9b"
        {...props}
      />
    </View>
  )
};




textInput.PropTypes = {
  placeholder: PropTypes.string,
  secureInput: PropTypes.bool,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,


};

export default textInput;
