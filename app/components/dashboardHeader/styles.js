import {Platform, StyleSheet, Dimensions, StatusBar } from 'react-native';
import * as GlobalStyles from '../../config/GlobalStyles';


const width = GlobalStyles.WIDTH;
const height = GlobalStyles.HEIGHT;

// let fontSize = width / 20;

let fontSize, headerHeight;
if (width < GlobalStyles.SCREEN_SIZE){
  fontSize =  width / 20 ;
  headerHeight = height /12;
}else{
  fontSize =  width / 55 ;
  headerHeight = height /12;

}

// console.log("StatusBar.getCurrentHeightStatusBar...getCurrentHeight   " + Platform.select);


const Styles = StyleSheet.create({
  container: {
    width: width,
    height           : headerHeight,
    backgroundColor : GlobalStyles.HEADER_COLOR,
    paddingTop: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
  },
  title: {
    // flex            : 1,
    color           : GlobalStyles.DASHBOARD_HEADER_FONT_COLOR,
    textAlign       : 'center',
    fontSize        : fontSize,
    fontFamily      :'Lato',
    marginTop:-20,
    // borderWidth:5,
  },
  titleFactoryName: {
        color           : GlobalStyles.DASHBOARD_HEADER_FONT_COLOR,
    textAlign       : 'center',
    fontSize        : fontSize * 0.7,
    fontFamily      :'Lato',
  },

});

export default Styles;
