import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import userDashBoard from '../screens/userDashBoard';



export default StackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Login:{
    screen: Login,
    navigationOptions: {
      header: () => null,
    },
  },
  userDashBoard:{
    screen: userDashBoard,
    navigationOptions: {
      header: () => null,
    },
  //   navigationOptions: ({ navigation }) => ({
  //     headerTitle: navigation.state.params.title,
  //   }),
  }
});
