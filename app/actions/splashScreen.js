import * as types from './types'; // action types from types.js file
import { NetInfo } from 'react-native';


export const chechConnectionStatus() => {
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
});
function handleFirstConnectivityChange(isConnected) {
      console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
      NetInfo.isConnected.removeEventListener(
            'change',
            handleFirstConnectivityChange
      );
}
NetInfo.isConnected.addEventListener(
      'change',
      handleFirstConnectivityChange
);
}
