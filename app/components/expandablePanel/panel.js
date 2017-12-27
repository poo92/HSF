
import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated, Easing,ScrollView, TouchableOpacity} from 'react-native';
import {CachedImage} from "react-native-img-cache";


import * as urls from '../../config/urls';         // get the url for images
import Styles from './styles';


class Panel extends Component{
      constructor(props){
            super(props);
            this.state = {
                  component   : props.component,
                  productionLine: props.productionLine,
                  image       : props.image,
                  sensorList  : props.sensorList,
                  onPress     : props.onPress,
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
            Animated.timing(
                  this.state.animation,
                  {
                        toValue: finalValue,
                        duration:80,
                        easing:Easing.linear
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
                              <TouchableOpacity
                                    style={Styles.button}
                                    onPress={this.toggle.bind(this)}
                                    underlayColor="#f1f1f1">
                                    <View>
                                          <Text style={Styles.title}>{this.state.component}</Text>
                                          <CachedImage source={{ uri: urls.IMAGE_URL + this.state.image }} mutable style={ Styles.buttonImage}/>
                                    </View>
                              </TouchableOpacity>
                        </View>
                        <ScrollView>
                              <View style={Styles.body} onLayout={this._setMaxHeight.bind(this)}>
                                    { this.state.sensorList.map((sensor) => (
                                          <TouchableOpacity
                                                style={ Styles.sensorButton}
                                                onPress={ () => this.props.onPress(this.state.component,sensor.sensorName,sensor.sensorTag)}
                                                underlayColor="#f1f1f1"
                                                key= { sensor.sensorName }>
                                                <View>
                                                      <Text style={ Styles.sensorTitle}> { sensor.sensorName }</Text>
                                                      <CachedImage source={{ uri: urls.IMAGE_URL + sensor.sensorImage }} mutable style={ Styles.sensorButtonImage}/>
                                                </View>
                                          </TouchableOpacity>
                                    ))}

                              </View>
                        </ScrollView>
                  </Animated.View>
            );
      }
}


// <Image source={{uri: urls.IMAGE_URL + this.state.image}}
//       style={ Styles.buttonImage} />

// <Image source={{uri: urls.IMAGE_URL + sensor.sensorImage}}
// style={ Styles.sensorButtonImage} />



export default Panel;
