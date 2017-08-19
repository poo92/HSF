// dashboard button( branch,section,productionlines)             params-button title , onPressaction
// different styling than button
import React from 'react';
import { View , TouchableHighlight , Text} from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

const dashboardButton = ( { title, onPress  }) => (
  <View style= { Styles.container }>
    <TouchableHighlight style= { Styles.button}
    onPress={ onPress }
     underlayColor="grey">
      <Text style= { Styles.buttonText }> { title }</Text>
    </TouchableHighlight>
  </View>
);




dashboardButton.PropTypes = {
  onpress: PropTypes.func,
  title: PropTypes.string,
};


const mapStateToProps =  state  => ({
  isLoggedIn : state.auth.isLoggedIn,
});

export default dashboardButton;
