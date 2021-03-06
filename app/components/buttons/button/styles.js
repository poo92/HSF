import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../../config/GlobalStyles';


const width = GlobalStyles.WIDTH;



let fontSize, buttonWidth;
if (width < GlobalStyles.SCREEN_SIZE){
   fontSize =  width / 25 ;
   buttonWidth = width / 4; ;
}else{
  fontSize =  width / 60 ;
  buttonWidth = width / 8  ;
}



const Styles = StyleSheet.create({
  container: {
    alignItems:'center',

  },
  button: {
   height:40,
   width:buttonWidth,
   borderRadius:5,
   backgroundColor:GlobalStyles.BUTTON_COLOR,
   justifyContent: 'center',
   marginTop:10,

 },
 buttonText: {
 textAlign: 'center',
 fontSize:fontSize,
 fontWeight: '600',
 color:"#ffffff",

},
});

export default Styles;
