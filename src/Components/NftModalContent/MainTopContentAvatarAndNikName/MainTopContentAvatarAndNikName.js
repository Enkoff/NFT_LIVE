import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import CustomText from '../../CustomText/CustomText';
import {SIZE, THEME} from '../../../constants';

const MainTopContentAvatarAndNikName = ({item, setIsModal}) => {
    const navigation = useNavigation();

    const {user: {id}} = useSelector(state => state['user']);
    const {authorAvatar, authorNikName, authorId, authorBackground} = item;

    const userDetailHandler = () => {
        if (authorId !== id) {
            setIsModal(false);
            setTimeout(() => {
                navigation.navigate('WatchUserDetailScreen', {user: {id: authorId}});
            }, 100);
        }
    };

    return (
        <TouchableOpacity
            style={styles.wrapper}
            disabled={authorId === id}
            activeOpacity={.8}
            onPress={userDetailHandler}
        >
            <Image style={[styles.avatar, {backgroundColor: authorBackground}]} source={{uri: authorAvatar}}/>
            <CustomText textStyle={styles.authorNikName}>{authorNikName}</CustomText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: SIZE.height.h20,
        height: SIZE.height.h20,
        borderRadius: SIZE.borderRadius.br8,
        marginRight: SIZE.width.w10
    },
    authorNikName: {
        fontSize: SIZE.fontSize.fs14,
        lineHeight: SIZE.lineHeight.lh18,
        color: THEME.blue
    }
});

export default MainTopContentAvatarAndNikName;


