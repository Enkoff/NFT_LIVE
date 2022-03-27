import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText} from '../../index';
import {SIZE} from '../../../constants';

const Message = ({time, isLeft, message}) => {
    const isOnLeft = type => {
        if (isLeft && type === 'messageContainer') {
            return {
                alignSelf: 'flex-start',
                backgroundColor: '#1F1F34',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: SIZE.borderRadius.br17,
            };
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.messageContainer, isOnLeft('messageContainer')]}>
                <View style={styles.messageView}>
                    <CustomText textStyle={styles.message}>{message}</CustomText>
                </View>
                <View style={styles.timeView}>
                    <CustomText textStyle={styles.time}>{time}</CustomText>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZE.height.h10,
    },
    messageContainer: {
        borderRadius: SIZE.borderRadius.br17,
        borderBottomRightRadius: 0,
        paddingVertical: SIZE.height.h20,
        paddingLeft: SIZE.width.w21,
        paddingRight: SIZE.width.w15,
        maxWidth: '80%',
        backgroundColor: '#2463DE',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginHorizontal: SIZE.width.w21,
    },
    messageView: {
        backgroundColor: 'transparent',
        maxWidth: '80%',
    },
    message: {
        alignSelf: 'flex-start'
    },
    timeView: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        paddingLeft: SIZE.width.w15,
    },
    time: {
        fontSize: SIZE.fontSize.fs12,
        color: 'rgba(255, 255, 255, 0.6)'
    }
});

export default Message;


