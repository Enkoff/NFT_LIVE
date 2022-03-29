import React from 'react';
import {createStackNavigator,} from '@react-navigation/stack';

import {navigationConstants} from '../../constants';
import {
    OnboardingScreen,
    PinCodeScreen,
    RegisterScreen,
    SetPinCodeScreen
} from '../../Screens';

const OnboardingStack = createStackNavigator();

const OnboardingStackNav = () => {
    return (
        <OnboardingStack.Navigator
            initialRouteName={'OnboardingScreen'}
            screenOptions={navigationConstants.headerShownFalse}>
            <OnboardingStack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={navigationConstants.gestureDirectionVertical}
            />
            <OnboardingStack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={navigationConstants.forHorizontalIOS}
            />
            <OnboardingStack.Screen
                name="SetPinCodeScreen"
                component={SetPinCodeScreen}
                options={navigationConstants.gestureDirectionVertical}
            />
            <OnboardingStack.Screen
                name="PinCodeScreen"
                component={PinCodeScreen}
                options={navigationConstants.gestureDirectionVertical}
            />
        </OnboardingStack.Navigator>
    );
};

export default OnboardingStackNav;
