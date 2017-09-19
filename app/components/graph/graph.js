// logo of the login page image and the title
import React, { Component } from 'react';
import {View, WebView } from 'react-native';
import Styles from './styles';

import AutoHeightWebView from 'react-native-autoheight-webview';

class Graph extends Component {

      constructor (props) {
            super(props);
            this.state = {
                  uri: props.uri,
            };


      }


      render(){
            return(
                  <View style={Styles.container}>
                        <AutoHeightWebView
                              onHeightUpdated={height => console.log(height)}
                              style={Styles.graph}
                              source={{uri: this.state.uri}}

                              />

                  </View>
            )
      }
}


export default Graph;
