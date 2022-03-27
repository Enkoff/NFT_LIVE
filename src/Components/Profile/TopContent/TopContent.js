import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {SIZE, THEME} from '../../../constants';
import CustomText from '../../CustomText/CustomText';
import {changeNumber} from '../../../config';
import {HeartSvg, UsersSvg} from '../../SVG';
import {howMuchLikes} from '../../../config/module/howMuchLikes';

//ПРОПИСАТИ РЕАЛЬНІ ЗНАЧЕННЯ В ЛАЙКИ ТА ПІДПІСНИКИ
const TopContent = ({user: {avatarUrl, avatarBackground, name, nikName, gallery, subscribers}}) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.avatarWrapper}>
                <Image
                    source={{uri: avatarUrl}}
                    style={[styles.avatar, avatarBackground && {backgroundColor: avatarBackground}]}
                />
            </View>
            <View style={styles.contentContainer}>
                <CustomText textStyle={styles.name}>{name}</CustomText>
                <CustomText textStyle={styles.nikName}>{nikName}</CustomText>
                <View style={styles.likeAndSubscribeWrapper}>
                    <HeartSvg width={SIZE.height.h18} height={SIZE.height.h18}/>
                    <CustomText textStyle={styles.likes}>{gallery && changeNumber(howMuchLikes(gallery))}</CustomText>
                    <UsersSvg width={SIZE.height.h18} height={SIZE.height.h18}/>
                    <CustomText textStyle={styles.subscribes}>{subscribers && changeNumber(subscribers.length)}</CustomText>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: SIZE.width.w16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        width: SIZE.height.h105,
        height: SIZE.height.h105,
        borderRadius: SIZE.borderRadius.br44,
        overflow: 'hidden',
        marginRight: SIZE.width.w21
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    contentContainer: {},
    name: {
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36
    },
    nikName: {
        color: THEME.white60
    },
    likeAndSubscribeWrapper: {
        marginTop: SIZE.height.h12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    likes: {
        marginLeft: SIZE.width.w10,
        marginRight: SIZE.width.w18
    },
    subscribes: {
        marginLeft: SIZE.width.w10,
    },
});

export default TopContent;


