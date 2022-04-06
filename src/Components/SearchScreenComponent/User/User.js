import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {SIZE, THEME} from '../../../constants';
import {CustomButton, CustomText, SvgIconButton} from '../../index';
import {MessageSvg} from '../../SVG';
import {followUnfollowThunk} from '../../../Redux/slices';

const User = ({user: currentUser}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {user} = useSelector(state => state['user']);

    const {id: itemUserId, avatarBackground, avatarUrl, nikName} = currentUser;
    const {subscriptions} = user;

    const [isFollow, setIsFollow] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const userHandler = () => {
        navigation.navigate('WatchUserDetailScreen', {user: {id: itemUserId, avatarUrl, avatarBackground, nikName}});
    };

    const followHandler = async () => {
        setIsLoading(true);
        const followUser = {
            followUserId: itemUserId,
            followUserAvatarUrl: avatarUrl,
            followUserAvatarBackground: avatarBackground,
            followUserNikName: nikName
        };

        await dispatch(followUnfollowThunk({user, followUser, isFollow}));

        setIsLoading(false);
        setIsFollow(prev => !prev);
    };

    const sendMessage = () => {
        navigation.navigate('SendMessageScreen', {chatCompanion: currentUser});
    };

    useEffect(() => {
        if (!isLoading) {
            const isFollow = subscriptions.some(item => item.id === itemUserId);
            isFollow ? setIsFollow(true) : setIsFollow(false);
        }
    }, [subscriptions]);

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity activeOpacity={0.5} onPress={userHandler}>
                <View style={styles.contentWrapper}>
                    <View style={[styles.avatarContainer, {backgroundColor: avatarBackground}]}>
                        <FastImage style={styles.fastImg}
                                   source={{
                                       uri: avatarUrl,
                                       priority: FastImage.priority.high,
                                   }}
                                   resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <CustomText textStyle={styles.nikName}>{nikName}</CustomText>
                </View>
            </TouchableOpacity>
            <View style={styles.btnWrapper}>
                <SvgIconButton onPress={sendMessage} wrapperStyle={styles.messageWrapper}>
                    <MessageSvg width={SIZE.height.h24} height={SIZE.height.h24}/>
                </SvgIconButton>
                <CustomButton
                    isLoading={isLoading}
                    onPress={followHandler}
                    name={isFollow ? 'Unfollow' : 'Follow'}
                    wrapperStyle={styles.followWrapper}
                    textWrapperStyle={{backgroundColor: isFollow ? THEME.white5 : THEME.secondary}}
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: SIZE.height.h6,
        paddingHorizontal: SIZE.width.w15,
        paddingVertical: SIZE.height.h10,
        backgroundColor: THEME.white5,
        borderRadius: SIZE.borderRadius.br12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        width: SIZE.height.h42,
        height: SIZE.height.h42,
        borderRadius: SIZE.borderRadius.br17,
        overflow: 'hidden'
    },
    fastImg: {
        width: '100%',
        height: '100%'
    },
    btnWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nikName: {
        color: THEME.blue,
        marginLeft: SIZE.width.w10
    },
    followWrapper: {
        width: SIZE.width.w84,
        height: SIZE.height.h32
    },
    messageWrapper: {
        marginRight: SIZE.width.w10,
        backgroundColor: THEME.white5
    }
});

export default User;


