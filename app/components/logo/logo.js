// logo of the login page image and the title
import React, { Component } from 'react';
import { View , Image , Text, Keyboard } from 'react-native';
import Styles from './styles';

class Logo extends Component {

      constructor (props) {
            super(props);
            this.state = {
                  logoStyle: false,
            };
            this._keyboardDidShow = this._keyboardDidShow.bind(this);
            this._keyboardDidHide = this._keyboardDidHide.bind(this);

      }


      componentWillMount () {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }
      componentWillUnmount () {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
      }


      _keyboardDidShow () {
            this.setState({ logoStyle:  true });
      };

      _keyboardDidHide () {
            this.setState({ logoStyle:  false });
      };

      render(){
            return(
                  <View style={Styles.container}>
                        <Image style={[Styles.loginPageLogo, this.state.logoStyle && Styles.loginPageLogoKeyBoardView]}  source={require('./images/logo.jpg')} />
                        <Text style={[Styles.title, this.state.logoStyle && Styles.titleKeyBoardView]}> Hitech Smart Factory</Text>
                  </View>
            )
      }
}


export default Logo;
