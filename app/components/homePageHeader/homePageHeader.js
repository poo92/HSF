import React, { Component } from 'react';
import { View  , Text } from 'react-native';
import Styles from './styles';

const homePageHeader = () => {
  // componentDidMount() {
  //   this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
  //   this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
  // }

  // componentWillMount() {
  //   this.keyboardShowListener.remove();
  //   this.keyboardHideListener.remove();
  // }

  // keyboardShow = () => {
  //   console.log('keyboard dod show');
  // };
  //
  // keyboardHide = () => {
  //   console.log('keyboard dod hide');
  // };


    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>Hitech Smart Factory</Text>
        <Text style={Styles.titleFactoryName}>CocaCola (PVT) Ltd</Text>
      </View>

    )

};


export default homePageHeader;
