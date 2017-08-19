import { StackNavigator } from 'react-navigation';
import { StatusBar, Platform } from 'react-native';

import Home from '../screens/Home';
import Login from '../screens/Login';
import userDashBoard from '../screens/DashBoard';
import Sections from '../screens/Sections'
import ProductionLines from '../screens/ProductionLines'

const userDashBoardStack = StackNavigator(
{
  userDashBoard:{
    screen: userDashBoard,
    navigationOptions: {
      header: () => null,
    },
  },
  Sections:{
    screen: Sections,
    navigationOptions: ({navigation}) => ({
    title: (Platform.OS === 'ios') ? '' : 'Branches',
    headerStyle: {height: 30, backgroundColor:'#004080'},
  })
  },
  ProductionLines:{
    screen: ProductionLines,
    navigationOptions: ({navigation}) => ({
    title: (Platform.OS === 'ios') ? '' : 'Branches',
    headerStyle: {height: 30, backgroundColor:'#004080'},
  })
  },

},
{
  // cardStyle: { paddingTop: StatusBar.currentHeight},
  headerMode: 'screen',
}
);




export default StackNavigator(
{
  // Home:{
  //   screen: Home,
  //   navigationOptions: {
  //     header: () => null,
  //   },
  // },
  Login:{
    screen: Login,
    navigationOptions: {
      header: () => null,
    },
  },
  userDashBoard:{
    screen: userDashBoardStack,
  },
},
{
  // cardStyle: { paddingTop: StatusBar.currentHeight},
  headerMode: 'none',
}
);
