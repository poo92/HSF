import React from 'react';
import { View , TouchableHighlight , Text} from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

const button = ( { onpress , title }) => (
  <View style= { Styles.container }>
    <TouchableHighlight style= { Styles.button}
    onPress={ onpress }
     underlayColor="grey">
      <Text style= { Styles.buttonText }> { title }</Text>
    </TouchableHighlight>
  </View>
);




button.PropTypes = {
  onpress: PropTypes.func,
  title: PropTypes.string,
};

export default button;
