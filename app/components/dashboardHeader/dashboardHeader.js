import React, { Component } from 'react';
import { View  , Text } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './styles';

const dashboardHeader = ( { factoryName } ) => {
    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>Hitech Smart Factory</Text>
        <Text style={Styles.titleFactoryName}>{ factoryName }</Text>
      </View>

    )

};

dashboardHeader.PropTypes = {
  factoryName: PropTypes.string,
};

export default dashboardHeader;
