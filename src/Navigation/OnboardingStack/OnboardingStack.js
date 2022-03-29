import React from 'react';
import {CardStyleInterpolators, createStackNavigator,} from '@react-navigation/stack';

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
            screenOptions={{headerShown: false}}>
            <OnboardingStack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{gestureDirection: 'vertical'}}
            />
            <OnboardingStack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            />
            <OnboardingStack.Screen
                name="SetPinCodeScreen"
                component={SetPinCodeScreen}
                options={{gestureDirection: 'vertical'}}
            />
            <OnboardingStack.Screen
                name="PinCodeScreen"
                component={PinCodeScreen}
                options={{gestureDirection: 'vertical'}}
            />
        </OnboardingStack.Navigator>
    );
};

export default OnboardingStackNav;
