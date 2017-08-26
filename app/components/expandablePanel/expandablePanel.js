import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,Animated,ScrollView, TouchableHighlight} from 'react-native'; //Step 1

import Styles from './styles';
import * as urls from '../../config/urls';         // get the url for images
import { PageContainer } from '../containers/appPagesContainer';

class Panel extends Component{
      constructor(props){
            super(props);

            this.state = {
                  title       : props.title,                       // title of the panel
                  productionlinedata : props.productionlinedata,  // productionline data array  passed from parent
                  image : props.image,
                  expanded    : false,
                  animation   : new Animated.Value()
            };
      }

      // method to set the maximum height of the panel
      _setMaxHeight(event){
            this.setState({
                  maxHeight   : event.nativeEvent.layout.height
            });
      }

      // method to set the collapsible minimun height of the panel
      _setMinHeight(event) {
            this.setState({ minHeight: event.nativeEvent.layout.height })
            this.state.animation.setValue(event.nativeEvent.layout.height)
            
      }

      // method to handle the touch event
      toggle(){
            console.log(this);

            let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight;
            let finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

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

      render(){


            return (
                  <PageContainer>
                        <Animated.View
                              style={[{height: this.state.animation}]}>

                              <View  onLayout={this._setMinHeight.bind(this)}>
                                    <TouchableHighlight style={Styles.button} onPress={this.toggle.bind(this)} >
                                          <View style= { Styles.container} >
                                                <Text style={Styles.title}>{this.state.title}</Text>
                                                <Image source={{uri: urls.IMAGE_URL + this.state.image}}
                                                      style={ Styles.image} />
                                          </View>
                                    </TouchableHighlight>
                              </View>


                              <View  onLayout={this._setMaxHeight.bind(this)}>
                                    {this.state.productionlinedata.map(productionline => (
                                          <TouchableHighlight
                                                style={Styles.imageButton}
                                                key={productionline.sensor}>
                                                <View  style= { Styles.container}>
                                                      <Text style={Styles.title}>{productionline.sensor}</Text>
                                                      <Image source={{uri: urls.IMAGE_URL + productionline.sensorImage}}
                                                            style={ Styles.sensorImage} />
                                                </View>
                                          </TouchableHighlight>

                                    ))}
                              </View>
                        </Animated.View>
                  </PageContainer>


            );
      }
}


export default Panel;
