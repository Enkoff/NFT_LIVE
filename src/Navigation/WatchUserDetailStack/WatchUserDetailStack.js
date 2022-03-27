import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import {WatchUserDetailScreen} from '../../Screens';

const WatchUserDetailStack = createStackNavigator();

const WatchUserDetailStackNav = (props) => {
    return (
        <WatchUserDetailStack.Navigator
            initialRouteName='WatchUserDetailScreen'
            screenOptions={{
                headerShown: false,
            }}>
            <WatchUserDetailStack.Screen
                name="WatchUserDetailScreen"
                component={WatchUserDetailScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
        </WatchUserDetailStack.Navigator>
    );
};

export default WatchUserDetailStackNav;
