import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../config/GlobalStyles';


const width = GlobalStyles.WIDTH;
const height = GlobalStyles.HEIGHT;

// let fontSize = width / 20;

let fontSize, textInputWidth;
if (width < GlobalStyles.SCREEN_SIZE){
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
   color: '#ffffff',
   // placeholderTextColor: '#e1e1e1'

 },

});

export default Styles;
