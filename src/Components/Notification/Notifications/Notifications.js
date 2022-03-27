import React from 'react';
import {View, StyleSheet} from 'react-native';

import NotificationRenderItem from '../NotificationRenderItem/NotificationRenderItem';
import {SIZE} from '../../../constants';

const Notifications = ({notifications}) => {
    return (
        <View style={styles.wrapper}>
            {notifications.map(item => <NotificationRenderItem key={item.id} item={item}/>)}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: SIZE.width.w18,
        paddingBottom: SIZE.height.h150
    }
});

export default Notifications;


