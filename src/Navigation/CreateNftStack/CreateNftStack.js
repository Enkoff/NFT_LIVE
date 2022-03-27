import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import {
    CreateNftScreen,
    PhotoEditorScreen,
    PublishScreen
} from '../../Screens';
import ProfileStackNav from '../ProfileStack/ProfileStack';

const CreateNftStack = createStackNavigator();

const CreateNftStackNav = () => {
    return (
        <CreateNftStack.Navigator
            initialRouteName="CreateNftScreen"
            screenOptions={{headerShown: false}}>
            <CreateNftStack.Screen
                name="CreateNftScreen"
                component={CreateNftScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            />
            <CreateNftStack.Screen
                name="PhotoEditorScreen"
                component={PhotoEditorScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            />
            <CreateNftStack.Screen
                name="PublishScreen"
                component={PublishScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            />
            <CreateNftStack.Screen
                name="ProfileStackNav"
                component={ProfileStackNav}
            />
        </CreateNftStack.Navigator>
    );
};

export default CreateNftStackNav;
