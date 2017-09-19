import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import * as GlobalStyles from '../../config/GlobalStyles';





const width = GlobalStyles.WIDTH;

let fontSize, imageWidth;
if (width < GlobalStyles.SCREEN_SIZE){
  fontSize =  width / 15 ;
  imageWidth = width / 3 ;
}else{
  fontSize =  width / 25 ;
  imageWidth = width / 5 ;
}

let smallImageWidth;

if (width < 1000){
  smallImageWidth = width / 6 ;
}else{
  smallImageWidth = width / 10 ;
}







const Styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  loginPageLogo: {
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
    marginBottom: 10,
    //  marginLeft:120,
  },
  loginPageLogoKeyBoardView: {
        display:'none',
    // justifyContent: 'center',
    // width: imageWidth/2,
    // height: imageWidth/2,
    // marginBottom: 5,
  },
  title: {
    fontSize: fontSize,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight: '400',
    fontFamily:'sans'
  },
  titleKeyboardView: {
    fontSize: fontSize/5,
    textAlign: 'center',
    margin: 5,
    color: '#000000',
    fontWeight: '400',
    fontFamily:'sans'
  },
});

export default Styles;
