import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {CustomText} from '../../index';
import {SIZE, THEME} from '../../../constants';
import {deletePushNotificationThunk} from '../../../Redux/slices';
import {getTime} from '../../../config/module/getTime';

const RenderMessageItem = ({item}) => {
    const dispatch = useDispatch();

    const {uid} = useSelector(state => state['auth']);
    const {id, imgUrl, imgBg, title, date, subTitle} = item;

    const deleteItem = () => {
        dispatch(deletePushNotificationThunk({uid, pushId: id}));
    };

    return (
        <TouchableOpacity activeOpacity={.6} onLongPress={deleteItem}>
            <View style={styles.itemWrapper}>
                <View style={[styles.imgWrapper, {backgroundColor: imgBg}]}>
                    <Image style={styles.img} source={{uri: imgUrl}}/>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.topWrapper}>
                        <CustomText textStyle={styles.title}>{title}</CustomText>
                        <CustomText textStyle={styles.time}>{getTime(date)}</CustomText>
                    </View>
                    <CustomText>{subTitle}</CustomText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.white5,
        borderRadius: SIZE.borderRadius.br12,
        paddingVertical: SIZE.height.h10,
        paddingHorizontal: SIZE.width.w15,
        marginBottom: SIZE.height.h10,
    },
    imgWrapper: {
        width: SIZE.height.h42,
        height: SIZE.height.h42,
        borderRadius: SIZE.borderRadius.br17,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    wrapper: {
        marginLeft: SIZE.width.w15,
        width: '80%',
    },
    topWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: THEME.white60,
        fontSize: SIZE.fontSize.fs12,
    },
    time: {
        color: THEME.white60,
        fontSize: SIZE.fontSize.fs10,
    },
});

export default RenderMessageItem;


