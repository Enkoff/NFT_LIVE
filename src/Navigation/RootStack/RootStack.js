import React, {useEffect, useState} from 'react';
import {createStackNavigator,} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    CreateNftStackNav,
    OnboardingStackNav,
    ProfileStackNav,
} from '../index';
import {PinCodeScreen, SendMessageScreen, WatchUserDetailScreen} from '../../Screens';
import BottomStackNav from '../BottomStack/BottomStack';
import LoadingScreen from '../../Screens/LoadingScreen/LoadingScreen';
import {navigationConstants} from '../../constants';

const RootStack = createStackNavigator();

const defaultOptions = {
    gestureDirection: 'vertical'
}

const RootStackNav = () => {
    // const [isEntry, setIsEntry] = useState(null);
    //
    // const firstStart = async () => {
    //     const isEntry = await AsyncStorage.getItem('firstEnter');
    //     if (!isEntry) {
    //         setIsEntry(false);
    //     }
    //     setIsEntry(true);
    // };
    //
    // useEffect(() => {
    //     firstStart();
    // }, []);
    //
    // if (isEntry === null) {
    //     return <LoadingScreen />;
    // }

    return (
        <RootStack.Navigator
            // initialRouteName={isEntry ? 'PinCodeScreen' : 'OnboardingStackNav'}
            screenOptions={navigationConstants.headerShownFalse}>
            <RootStack.Screen
                name="OnboardingStack"
                component={OnboardingStackNav}
                options={navigationConstants.gestureDirectionVertical}
            />
            {/*<RootStack.Screen*/}
            {/*    name="BottomStackNav"*/}
            {/*    component={BottomStackNav}*/}
            {/*    options={{gestureDirection: 'vertical'}}*/}
            {/*/>*/}
            {/*<RootStack.Screen*/}
            {/*    name="ProfileStackNav"*/}
            {/*    component={ProfileStackNav}*/}
            {/*    options={{gestureDirection: 'vertical'}}*/}
            {/*/>*/}
            {/*<RootStack.Screen*/}
            {/*    name="CreateNftStackNav"*/}
            {/*    component={CreateNftStackNav}*/}
            {/*    options={{gestureDirection: 'vertical'}}*/}
            {/*/>*/}
            {/*<RootStack.Screen*/}
            {/*    name="WatchUserDetailScreen"*/}
            {/*    component={WatchUserDetailScreen}*/}
            {/*    options={{gestureDirection: 'vertical'}}*/}
            {/*/>*/}
            {/*<RootStack.Screen*/}
            {/*    name="SendMessageScreen"*/}
            {/*    component={SendMessageScreen}*/}
            {/*    options={{gestureDirection: 'vertical'}}*/}
            {/*/>*/}
            {/*<RootStack.Screen*/}
            {/*    name="PinCodeScreen"*/}
            {/*    component={PinCodeScreen}*/}
            {/*    options={{gestureDirection: 'vertical'}}*/}
            {/*/>*/}
        </RootStack.Navigator>
    );
};

export default RootStackNav;
