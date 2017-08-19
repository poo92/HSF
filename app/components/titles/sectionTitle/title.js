import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Container = ( { titleText }) => (
  <View>
    <Text style={Styles.sectionHeader}> { titleText } </Text>
  </View>
);

Container.PropTypes = {
  titleText: PropTypes.string,
};

export default Container;
