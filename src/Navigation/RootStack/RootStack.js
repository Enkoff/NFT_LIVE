import React, {useEffect} from 'react';
import {createStackNavigator,} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {navigationConstants} from '../../constants';
import {getFirsEntryThunk} from '../../Redux/slices/auth.slice';
import {CreateNftStackNav, OnboardingStackNav, ProfileStackNav} from '../index';
import {PinCodeScreen, SendMessageScreen, WatchUserDetailScreen} from '../../Screens';
import BottomStackNav from '../BottomStack/BottomStack';
import LoadingScreen from '../../Screens/LoadingScreen/LoadingScreen';

const RootStack = createStackNavigator();

const RootStackNav = () => {
    const dispatch = useDispatch();
    const {isFirstEntry} = useSelector(state => state['auth']);

    useEffect(() => {
        dispatch(getFirsEntryThunk());
    }, [dispatch]);

    if (isFirstEntry === null) return <LoadingScreen/>

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
