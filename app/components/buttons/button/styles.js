import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../../config/GlobalStyles';


const width = Dimensions.get('window').width;



let fontSize, buttonWidth;
if (width < GlobalStyles.SCREEN_SIZE){
   fontSize =  width / 25 ;
   buttonWidth = width / 4; ;
}else{
  fontSize =  width / 60 ;
  buttonWidth = width / 7  ;
}



const Styles = StyleSheet.create({
  container: {
    alignItems:'center',

  },
  button: {
   height:40,
   width:buttonWidth,
   borderRadius:5,
   backgroundColor:'#3399ff',
   justifyContent: 'center',
   marginTop:10,
 },
 buttonText: {
 textAlign: 'center',
 fontSize:fontSize,
 fontWeight: '500',
 color:"black",

},
});

export default Styles;