import React, { Component } from 'react';
import { View , Image , Text, Keyboard } from 'react-native';
import Styles from './styles';

class Logo extends Component {
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

  render(){
    return(
      <View style={Styles.container}>
        <Image style={Styles.loginPageLogo} source={require('./images/logo.jpg')} />
        <Text style={Styles.title}> Hitech Smart Factory</Text>
      </View>
    )
  }
}


export default Logo;
