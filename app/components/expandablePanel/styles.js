import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../config/GlobalStyles';

const width = GlobalStyles.WIDTH;
const height = GlobalStyles.HEIGHT;

let fontSize, imageWidth;
if (width < GlobalStyles.SCREEN_SIZE){
      fontSize =  width / 25 ;
      imageWidth = width / 6 ;
}else{
      fontSize =  width / 65 ;
      imageWidth = width / 14 ;
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
            padding : 5,
            color   :'black',
            fontWeight:'bold'
      },
      sensorTitle       : {
            paddingTop : 5,
            color   :'black',
            fontWeight:'600'
      },
      button      : {
            flex    : 1,
            backgroundColor:GlobalStyles.BUTTON_COLOR,

      },
      sensorButton      : {
            margin: 5,
            width: imageWidth * 1.5,
            height: imageWidth * 1.5,
            borderWidth:1,
            borderColor:"#a5a2a2",
            backgroundColor:GlobalStyles.BUTTON_COLOR_LIGHT,
      },
      buttonImage : {
            width   : imageWidth,
            height  : imageWidth,
            margin:5,
      },
      sensorButtonImage : {
            width   : imageWidth,
            height  : imageWidth,
            margin:5,
            marginTop:0,
            alignSelf:'center'
      },
      body        : {
            flexDirection:'row',
            flexGrow:1,
            flexWrap:'wrap',
            overflow:'visible',
      }
});

export default Styles;
