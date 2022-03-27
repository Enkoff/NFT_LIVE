import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {
    AvatarAndTitle,
    RootScreenTemplate
} from '../../Components';
import {FaqBtn, Notifications} from '../../Components/Notification';
import {snapshotService, userService} from '../../services';

const NotificationScreen = ({navigation}) => {
    const {uid} = useSelector(state => state['auth']);

    const [notifications, setNotifications] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        return navigation.addListener('focus', () => {
            userService.deleteMessageBadge(uid);
        });
    }, []);

    useEffect(() => {
        return snapshotService.getNotifications(uid, setNotifications);
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        const unsubscribe = await navigation.addListener('focus', () => {
            userService.deleteMessageBadge(uid);
        });
        await snapshotService.getNotifications(uid, setNotifications);
        setRefreshing(false);
        navigation.removeListener(unsubscribe);
    };

    return (
        <RootScreenTemplate
            headerComponent={<AvatarAndTitle title={'Notification'}/>}
            refreshing={refreshing}
            onRefresh={onRefresh}
        >
            <FaqBtn/>
            <Notifications notifications={notifications}/>
        </RootScreenTemplate>
    );
};

export default NotificationScreen;


