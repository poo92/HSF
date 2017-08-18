import React, { Component} from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from '../components/homePageHeader';
import { PageContainer } from '../components/containers/appPagesContainer';
// import { Header } from '../components/button';
// import { Logo } from '../components/logo';


class  userDashBoard extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }


  // goback = () => {
  //   this.props.navigation.goBack(null);
  // }

  render() {
    return(
      <PageContainer>
      <Header />
      <TouchableHighlight onPress= {this.goback}>
        <Text> go back</Text>
      </TouchableHighlight>
      </PageContainer>
    );
  }
}


// const mapStateToProps =  state  => ({
//     isLoggedIn : state.auth.isLoggedIn,
// });


export default connect ()(userDashBoard);
