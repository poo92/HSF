import {Platform, StyleSheet, Dimensions, StatusBar } from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// let fontSize = width / 20;

let fontSize, textInputWidth,headerHeight;
if (width < 1000){
  fontSize =  width / 20 ;
  textInputWidth = width / 3;
  headerHeight = height /12;
}else{
  fontSize =  width / 70 ;
  textInputWidth = width / 5 ;
  headerHeight = height /14;

}

// console.log("StatusBar.getCurrentHeightStatusBar...getCurrentHeight   " + Platform.select);


const Styles = StyleSheet.create({
  container: {
    width: width,
    height           : headerHeight,
    backgroundColor : '#004080',
    paddingTop: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
  },
  title: {
    // flex            : 1,
    color           : '#bfbfbf',
    textAlign       : 'center',
    fontSize        : fontSize,
    fontFamily      :'Lato',
    marginTop:-20,
    // borderWidth:5,
  },
  titleFactoryName: {
    // flex            : 1,
    color           : '#bfbfbf',
    textAlign       : 'center',
    fontSize        : fontSize * 0.6,
    fontFamily      :'Lato',
    // marginTop:-10,

    // borderWidth:5,
  },

});

export default Styles;
