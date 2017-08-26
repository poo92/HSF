import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../../config/GlobalStyles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


let fontSize, buttonHeight;
if (width < GlobalStyles.SCREEN_SIZE){
   fontSize =  width / 25 ;
   buttonHeight = height / 18;

}else{
  fontSize =  width / 70 ;
  buttonHeight = height / 20;
}



const Styles = StyleSheet.create({
  container: {
    alignItems:'center',

  },
  button: {
   width:width,
   height : buttonHeight,
   backgroundColor: GlobalStyles.BUTTON_COLOR,
   justifyContent: 'center',
   marginTop:10,
 },
 buttonText: {
 textAlign: 'left',
 fontSize:fontSize,
 fontWeight: '400',
 fontFamily:'serif',
 color:"black",

},
});

export default Styles;
