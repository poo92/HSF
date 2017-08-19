// entry point of the app

import React, { Component } from 'react';
import { AppRegistry,  StyleSheet,  Text,  View} from 'react-native';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';



// import Home from './screens/Home';
import Navigator from './config/routes';
import { AlertProvider } from './components/alert';
import store from './config/store';


const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={ addNavigationHelpers ({
      dispatch,
      state: nav,
    })}
    />
);

const mapStateToProps =  state  => ({
    nav : state.nav,
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () =>(
<Provider store={store }>
  <AlertProvider>
    <AppWithNavigation />
  </AlertProvider>
</Provider>

);
