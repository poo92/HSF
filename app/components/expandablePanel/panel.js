
import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated, ScrollView} from 'react-native';

import * as urls from '../../config/urls';         // get the url for images
import Styles from './styles';

class Panel extends Component{
      constructor(props){
            super(props);


            this.state = {
                  title       : props.title,
                  image : props.image,
                  expanded    : false,
                  animation   : new Animated.Value()
            };
      }

      toggle(){
            let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

            this.setState({
                  expanded : !this.state.expanded
            });

            this.state.animation.setValue(initialValue);
            Animated.spring(
                  this.state.animation,
                  {
                        toValue: finalValue
                  }
            ).start();
      }

      _setMaxHeight(event){
            this.setState({
                  maxHeight   : event.nativeEvent.layout.height
            });
      }

      _setMinHeight(event){
            this.setState({
                  minHeight   : event.nativeEvent.layout.height
            });
            this.state.animation.setValue(event.nativeEvent.layout.height);
      }

      render(){


            return (
                  <Animated.View
                        style={[Styles.container,{height: this.state.animation}]}>

                              <View style={Styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>

                                    <TouchableHighlight
                                          style={Styles.button}
                                          onPress={this.toggle.bind(this)}
                                          underlayColor="#f1f1f1">
                                          <View>
                                                <Text style={Styles.title}>{this.state.title}</Text>
                                                <Image source={{uri: urls.IMAGE_URL + this.state.image}}
                                                      style={ Styles.image} />
                                          </View>

                                    </TouchableHighlight>
                              </View>

                              <View style={Styles.body} onLayout={this._setMaxHeight.bind(this)}>
                                    {this.props.children}
                              </View>
                  </Animated.View>
            );
      }
}



export default Panel;
