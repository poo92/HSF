import { StyleSheet, Dimensions } from 'react-native';
import * as GlobalStyles from '../../config/GlobalStyles';





const width = GlobalStyles.WIDTH;
const height = GlobalStyles.WIDTH;

let graphWidth, grapHeight;
if (width < GlobalStyles.SCREEN_SIZE){
  graphWidth =  width * 0.9 ;
  grapHeight = height / 2 ;
}else{
  graphWidth =  width * 0.9  ;
  grapHeight = height / 4 ;
}








const Styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  graph: {
    justifyContent: 'center',
    width: graphWidth,
    height: grapHeight,
    marginTop: 10,
    //  marginLeft:120,
  },
});

export default Styles;
