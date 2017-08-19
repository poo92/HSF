// container for thr login page 
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Container = ( { children }) => (
  <View style={Styles.container}r>
    { children }
  </View>
);

Container.PropTypes = {
  children: PropTypes.any,
};

export default Container;
