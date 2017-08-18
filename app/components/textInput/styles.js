import { StyleSheet, Dimensions } from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;

// let fontSize = width / 20;

let fontSize, textInputWidth;
if (width < 1000){
   fontSize =  width / 25 ;
   textInputWidth = width / 3;
}else{
   fontSize =  width / 70 ;
   textInputWidth = width / 5 ;
}



const Styles = StyleSheet.create({
  textInput: {
   height:40,
   width:textInputWidth,
   textAlign: 'center',
   fontSize:fontSize,
 },

});

export default Styles;
