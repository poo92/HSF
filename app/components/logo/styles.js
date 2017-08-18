import { StyleSheet, Dimensions, PixelRatio } from 'react-native';





const width = Dimensions.get('window').width;
// console.log("width    " + width );

let fontSize, imageWidth;
if (width < 1000){
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
  title: {
    fontSize: fontSize,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight: '400',
    fontFamily:'sans'
  },
});

export default Styles;
