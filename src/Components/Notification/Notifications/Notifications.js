import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import NotificationRenderItem from '../NotificationRenderItem/NotificationRenderItem';
import {SIZE, THEME} from '../../../constants';
import moment from 'moment';

const Notifications = ({notifications, dates}) => {
    return (
        <View style={styles.wrapper}>
            {
                dates.map(date => {
                    return (
                        <View key={date}>
                            <Text style={styles.date}>{date}</Text>
                            {notifications.map(item => {
                                if (moment(item.date).format('DD/MM/YY') === date) {
                                    return <NotificationRenderItem key={item.id} item={item}/>;
                                }
                            })}
                        </View>

                    );
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: SIZE.width.w18,
        paddingBottom: SIZE.height.h150
    },
    date: {
        color: THEME.white40,
        textAlign: 'center',
        marginVertical: SIZE.height.h16,
        fontWeight: 'bold',
    }
});

export default Notifications;


