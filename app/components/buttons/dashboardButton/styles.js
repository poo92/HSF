import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../../config/GlobalStyles';

const width = GlobalStyles.WIDTH;
const height = GlobalStyles.HEIGHT;


let fontSize, buttonHeight;
if (width < GlobalStyles.SCREEN_SIZE){
   fontSize =  width / 23 ;
   buttonHeight = height / 7;

}else{
  fontSize =  width / 70 ;
  buttonHeight = height / 20;
}



const Styles = StyleSheet.create({
  container: {    // alignItems:'center',
  flexDirection : 'row',
   justifyContent: 'space-between',
  },
  button: {
   width:width/ 2.5,
   height : buttonHeight,
   backgroundColor: GlobalStyles.BUTTON_COLOR,
   justifyContent: 'center',
   marginTop:20,
   marginLeft : 20,

   //

 },
 buttonText: {
 textAlign: 'center',
 fontSize:fontSize,
 fontWeight: '600',
 fontFamily:'serif',
 color:"#252525",

},
});

export default Styles;
