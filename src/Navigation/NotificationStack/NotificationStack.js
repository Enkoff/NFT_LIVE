import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';

import {FaqScreen, NotificationScreen} from '../../Screens';

const NotificationStack = createStackNavigator();

const NotificationStackNav = (props) => {
    return (
        <NotificationStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <NotificationStack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{
                    gestureDirection: 'vertical',
                }}
            />
            <NotificationStack.Screen
                name="FaqScreen"
                component={FaqScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            />
        </NotificationStack.Navigator>
    );
};

export default NotificationStackNav;

// date
// "101"
// (string)
// id
// "5"
// imgUrl
// "https://img.netzwelt.de/dw1200_dh900_sw0_sh0_sx0_sy0_sr4x3_nu0/picture/original/2021/11/nft-non-fungible-token-symbolbild-323795.jpeg"
// subTitle
// "Your NFT was sold!"
// time
// "10:35"
// title
// "NFT"