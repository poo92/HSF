import {Platform, StyleSheet, Dimensions, StatusBar } from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// let fontSize = width / 20;

let fontSize, textInputWidth,headerHeight;
if (width < 1000){
   fontSize =  width / 2 ;
   textInputWidth = width / 3;
   headerHeight = height /5;
}else{
   fontSize =  width / 70 ;
   textInputWidth = width / 5 ;
   headerHeight = height /14;

}

// console.log("StatusBar.getCurrentHeightStatusBar...getCurrentHeight   " + Platform.select);


const Styles = StyleSheet.create({
  container: {
    //  flex            : 1,
    width: width,
     backgroundColor : '#004080',
     height           : headerHeight,
     paddingTop: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
   },
   title: {
     flex            : 1,
     color           : '#bfbfbf',
     textAlign       : 'center',
     fontSize        : fontSize,
     fontFamily      :'Lato'
   },

});

export default Styles;
