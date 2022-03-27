import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {SIZE} from '../../constants';
import AvatarLoader from '../AvatarLoader/AvatarLoader';

const Avatar = ({chatCompanion}) => {
    const navigation = useNavigation();

    const {user: {avatarUrl, avatarBackground}} = useSelector(state => state['user']);

    const avatarHandler = () => {
        if (chatCompanion) {
            navigation.navigate('WatchUserDetailScreen', {
                user: {
                    id: chatCompanion.id,
                    avatarUrl: chatCompanion.avatarUrl,
                    avatarBackground: chatCompanion.avatarBackground,
                    nikName: chatCompanion.nikName
                }
            });
            return;
        }
        navigation.navigate('ProfileStackNav');
    };

    return (
        <TouchableOpacity onPress={avatarHandler} activeOpacity={.5}>
            <View
                style={[styles.avatarWrapper, {
                    backgroundColor: chatCompanion
                        ? chatCompanion.avatarBackground
                        : avatarBackground
                }]}
            >
                {!avatarUrl && <AvatarLoader/>}
                {avatarUrl &&
                <Image style={styles.avatar} source={{uri: `${chatCompanion ? chatCompanion.avatarUrl : avatarUrl}`}}/>}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    avatarWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE.height.h42,
        height: SIZE.height.h42,
        borderRadius: SIZE.borderRadius.br17,
        overflow: 'hidden',
    },
    avatar: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
});

export default Avatar;


