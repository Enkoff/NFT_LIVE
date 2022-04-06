import * as React from 'react';
import {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE, THEME} from '../../constants';
import {snapshotService} from '../../services';
import {getUidThunk} from '../../Redux/slices/auth.slice';

import {ChatScreen, HomeScreen, SearchScreen} from '../../Screens';
import {NotificationStackNav} from '../index';
import {
    ChatIcon,
    CreateNftIcon,
    HomeIcon,
    NotificationIcon,
    SearchIcon,
    tabBarBadgeStyle
} from '../../Components/TabIcons';
import {PlusSvg} from '../../Components/SVG';

const Tab = createBottomTabNavigator();

const CreateNft = () => null;

const BottomStackNav = ({route: {params}}) => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state['auth']);

    const [messagesBadge, setMessagesBadge] = useState(null);
    const [notificationBadge, setNotificationBadge] = useState(null);

    useEffect(() => {
        dispatch(getUidThunk(params.pin));
    }, []);

    useEffect(() => {
        if (uid) return snapshotService.getMessageBadge(uid, setNotificationBadge);
    }, [uid]);

    useEffect(() => {
        if (uid) return snapshotService.getAllNotShowChatsMessageBadge(uid, setMessagesBadge);
    }, [uid]);

    return (
        <>
            <Tab.Navigator
                initialRouteName={'HomeScreen'}
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: SIZE.height.h56,
                        backgroundColor: THEME.menu,
                        borderTopWidth: 0,
                    },
                }}>
                <Tab.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => <HomeIcon focused={focused}/>
                    }}
                />
                <Tab.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => <SearchIcon focused={focused}/>
                    }}
                />
                <Tab.Screen
                    name="CreateNft"
                    component={CreateNft}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <PlusSvg width={SIZE.height.h35} height={SIZE.height.h35}/>,
                        tabBarButton: (props) => <CreateNftIcon {...props}/>
                    }}
                />
                <Tab.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{
                        headerShown: false,
                        tabBarBadge: messagesBadge,
                        tabBarBadgeStyle: tabBarBadgeStyle(),
                        tabBarIcon: ({focused}) => <ChatIcon focused={focused}/>
                    }}
                />
                <Tab.Screen
                    name="NotificationStackNav"
                    component={NotificationStackNav}
                    options={{
                        headerShown: false,
                        tabBarBadge: notificationBadge,
                        tabBarBadgeStyle: tabBarBadgeStyle('notification'),
                        tabBarIcon: ({focused}) => <NotificationIcon focused={focused}/>
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default BottomStackNav;
