import { StyleSheet, Dimensions } from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// let fontSize = width / 20;

let fontSize, textInputWidth;
if (width < 1000){
   fontSize =  width / 25 ;
   textInputWidth = width / 3;
}else{
   fontSize =  width / 70 ;
   textInputWidth = width / 5 ;
}



const Styles = StyleSheet.create({
  container: {
     flex            : 1,
     backgroundColor : '#004080',
     height           : 35

   },
   title: {
     flex            : 1,
     color           : '#bfbfbf',
     textAlign       : 'center',
     fontSize        : 25,
     fontFamily      :'Lato'
   },

});

export default Styles;
