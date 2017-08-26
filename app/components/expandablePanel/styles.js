import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../config/GlobalStyles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;

let fontSize, imageWidth;
if (width < GlobalStyles.SCREEN_SIZE){
      fontSize =  width / 25 ;
      imageWidth = width / 4 ;
}else{
      fontSize =  width / 65 ;
      imageWidth = width / 10 ;
}




var Styles = StyleSheet.create({
    container   : {
        backgroundColor: GlobalStyles.BACKGROUND_COLOR,
        margin:10,
        overflow:'visible'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {
        backgroundColor:GlobalStyles.BUTTON_COLOR,
    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});

export default Styles;
