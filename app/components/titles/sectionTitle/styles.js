import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../../config/GlobalStyles';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;

// let fontSize = width / 20;

let fontSize;
if (width < GlobalStyles.SCREEN_SIZE){
  fontSize =  width / 25 ;

}else{
  fontSize =  width / 60 ;
}



const Styles = StyleSheet.create({
  sectionHeader: {
    width: width,
    padding : 7,
    color   :'#000000',
    fontWeight:'600',
    fontSize:fontSize,
    fontFamily :'Lato',
    backgroundColor : '#b3b3b3'
  },

});

export default Styles;
