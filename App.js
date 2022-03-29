import React, { useEffect, useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import RootStackNav from './src/Navigation/RootStack/RootStack';
import {store} from './src/Redux';
import {MyTheme} from './src/config';
import NoInternetConnection from './src/Components/NoIternetConnection/NoInternetConnection';
import {useNetInfo} from '@react-native-community/netinfo';

// ІГНОРУВАННЯ ПОМИЛКИ react-native-gesture-handler
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
///
const App = () => {
  const [isInternet, setIsInternet] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected === false) {
      setIsInternet(false);
    }
  }, [netInfo.isConnected]);

  const retryHandler = async () => {
    setIsLoading(true);
    if (netInfo.isConnected) {
      setIsInternet(true);
    } else {
      setIsInternet(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <RootStackNav/>
        <NoInternetConnection
          visible={!isInternet}
          callback={retryHandler}
          isLoading={isLoading}
        />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
