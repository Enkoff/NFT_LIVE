import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {followUnfollowThunk} from '../../../Redux/slices';
import {SIZE, THEME} from '../../../constants';
import CustomText from '../../CustomText/CustomText';
import {changeNumber} from '../../../config';
import {HeartSvg, MessageSvg, UsersSvg} from '../../SVG';
import {howMuchLikes} from '../../../config/module/howMuchLikes';
import {CustomButton, SvgIconButton} from '../../index';


const TopUserDetailContent = (
    {
        currentUser,
        isFollow
    }
) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {user} = useSelector(state => state['user']);

    const {id} = user;
    const {id: itemUserId, avatarUrl, avatarBackground, nikName, gallery, subscribers} = currentUser;

    const followHandler = () => {
        dispatch(followUnfollowThunk({userId: id, followUserId: itemUserId, item: currentUser, user}));
    };

    const sendMessage = () => {
        navigation.navigate('SendMessageScreen', {chatCompanion: currentUser});
    };

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.avatarWrapper}>
                    <Image
                        source={{uri: avatarUrl}}
                        style={[styles.avatar, avatarBackground && {backgroundColor: avatarBackground}]}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <CustomText textStyle={styles.nikName}>{nikName}</CustomText>
                    <View style={styles.likeAndSubscribeWrapper}>
                        <HeartSvg width={SIZE.height.h18} height={SIZE.height.h18}/>
                        <CustomText
                            textStyle={styles.likes}>{gallery && changeNumber(howMuchLikes(gallery))}</CustomText>
                        <UsersSvg width={SIZE.height.h18} height={SIZE.height.h18}/>
                        <CustomText
                            textStyle={styles.subscribes}>{subscribers && changeNumber(subscribers.length)}</CustomText>
                    </View>
                    <View style={styles.btnWrapper}>
                        <CustomButton
                            onPress={followHandler}
                            name={isFollow ? 'Unfollow' : 'Follow'}
                            wrapperStyle={styles.followWrapper}
                            textWrapperStyle={{backgroundColor: isFollow ? THEME.white5 : THEME.secondary}}
                        />
                        <SvgIconButton onPress={sendMessage} wrapperStyle={styles.messageWrapper}>
                            <MessageSvg width={SIZE.height.h24} height={SIZE.height.h24}/>
                        </SvgIconButton>
                    </View>
                </View>
            </View>
        </>

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
    name: {
        fontSize: SIZE.fontSize.fs26,
        lineHeight: SIZE.lineHeight.lh36
    },
    nikName: {
        color: THEME.blue
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
    btnWrapper: {
        marginTop: SIZE.height.h10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    followWrapper: {
        width: SIZE.width.w84,
        height: SIZE.height.h32
    },
    messageWrapper: {
        marginLeft: SIZE.width.w10,
        backgroundColor: THEME.white5
    }
});

export default TopUserDetailContent;


