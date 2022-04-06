import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {
    AvatarAndTitle,
    RootScreenTemplate
} from '../../Components';
import {FaqBtn, Notifications} from '../../Components/Notification';
import {snapshotService} from '../../services';
import {deletePushNotificationBadgeThunk} from '../../Redux/slices';

const NotificationScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {uid} = useSelector(state => state['auth']);
    const [notifications, setNotifications] = useState([]);
    const [dates, setDates] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        return navigation.addListener('focus', () => {
            dispatch(deletePushNotificationBadgeThunk({uid}));
        });
    }, []);

    useEffect(() => {
        return snapshotService.getNotifications(uid, setNotifications);
    }, []);

    useEffect(() => {
        const dates = notifications.map(item => moment(item.date).format('DD/MM/YY'));
        const uniqueDates = [...new Set(dates)];

        setDates(uniqueDates);
    }, [notifications]);

    const onRefresh = async () => {
        setRefreshing(true);

        await snapshotService.getNotifications(uid, setNotifications);
        const unsubscribe = await navigation.addListener('focus', () => {
            dispatch(deletePushNotificationBadgeThunk({uid}));
        });

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
            <Notifications dates={dates} notifications={notifications}/>
        </RootScreenTemplate>
    );
};

export default NotificationScreen;


