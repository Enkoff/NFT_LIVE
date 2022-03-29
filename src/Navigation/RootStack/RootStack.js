import React, {useEffect, useState} from 'react';
import {createStackNavigator,} from '@react-navigation/stack';

import {navigationConstants} from '../../constants';
import {firstEntry} from '../../config';
import {CreateNftStackNav, OnboardingStackNav, ProfileStackNav} from '../index';
import {PinCodeScreen, SendMessageScreen, WatchUserDetailScreen} from '../../Screens';
import BottomStackNav from '../BottomStack/BottomStack';
import LoadingScreen from '../../Screens/LoadingScreen/LoadingScreen';

const RootStack = createStackNavigator();

const RootStackNav = () => {
    const [isFirstEntry, setIsFirstEntry] = useState(null);

    useEffect(() => {
        firstEntry().then(isFirstEntry => setIsFirstEntry(isFirstEntry));
    }, []);

    if (isFirstEntry === null) {
        return <LoadingScreen/>;
    }

    return (
        <RootStack.Navigator
            initialRouteName={isFirstEntry ? 'PinCodeScreen' : 'OnboardingStackNav'}
            screenOptions={navigationConstants.headerShownFalse}>
            <RootStack.Screen
                name="OnboardingStack"
                component={OnboardingStackNav}
                options={navigationConstants.gestureDirectionVertical}
            />
            <RootStack.Screen
                name="BottomStackNav"
                component={BottomStackNav}
                options={navigationConstants.gestureDirectionVertical}
            />
            <RootStack.Screen
                name="ProfileStackNav"
                component={ProfileStackNav}
                options={navigationConstants.gestureDirectionVertical}
            />
            <RootStack.Screen
                name="CreateNftStackNav"
                component={CreateNftStackNav}
                options={navigationConstants.gestureDirectionVertical}
            />
            <RootStack.Screen
                name="WatchUserDetailScreen"
                component={WatchUserDetailScreen}
                options={navigationConstants.gestureDirectionVertical}
            />
            <RootStack.Screen
                name="SendMessageScreen"
                component={SendMessageScreen}
                options={navigationConstants.gestureDirectionVertical}
            />
            <RootStack.Screen
                name="PinCodeScreen"
                component={PinCodeScreen}
                options={navigationConstants.gestureDirectionVertical}
            />
        </RootStack.Navigator>
    );
};

export default RootStackNav;
