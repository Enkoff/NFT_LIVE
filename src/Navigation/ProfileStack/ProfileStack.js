import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import {
    EditProfileScreen,
    ProfileScreen,
    SettingsScreen
} from '../../Screens';

const ProfileStack = createStackNavigator();

const ProfileStackNav = (props) => {
    return (
        <ProfileStack.Navigator
            initialRouteName='ProfileScreen'
            screenOptions={{
                headerShown: false,
            }}>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />

            <ProfileStack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
            <ProfileStack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
                }}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNav;
