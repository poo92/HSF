// navigation paths
import { StackNavigator } from 'react-navigation';
import { StatusBar, Platform } from 'react-native';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import * as GlobalStyles from './GlobalStyles';

import Home from '../screens/Home';
import Login from '../screens/Login';
import userDashBoard from '../screens/DashBoard';
import Sections from '../screens/Sections';
import ProductionLines from '../screens/ProductionLines';
import ViewProductionLine from '../screens/ViewProductionLine';
import ViewSensor from '../screens/ViewSensor';



const headerStyle = {
      height: 35,
      backgroundColor: GlobalStyles.HEADER_COLOR,

}

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
    headerStyle: headerStyle,
  })
  },
  ProductionLines:{
    screen: ProductionLines,
    navigationOptions: ({navigation}) => ({
    title: (Platform.OS === 'ios') ? '' : 'Sections',
    headerStyle: headerStyle,
  })
  },
  ViewProductionLine:{
    screen: ViewProductionLine,
    navigationOptions: ({navigation}) => ({
    title: (Platform.OS === 'ios') ? '' : 'Production Lines',
    headerStyle: headerStyle,
  })
  },
  ViewSensor:{
    screen: ViewSensor,
    navigationOptions: ({navigation}) => ({
    title: (Platform.OS === 'ios') ? '' : 'Sensor',
    headerStyle: headerStyle,
  })
  },
},
{
  // cardStyle: { paddingTop: StatusBar.currentHeight},
  headerMode: 'float',
  transitionConfig: getSlideFromRightTransition
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
  // transitionConfig: getSlideFromRightTransition

}
);
