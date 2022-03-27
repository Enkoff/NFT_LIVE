import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {SIZE} from '../../../constants';
import {CustomText} from '../../index';

const HorizontalFriend = ({subUser, index}) => {
    const navigation = useNavigation();
    const {nikName, avatarUrl, avatarBackground} = subUser;

    const sendMessageScreenHandler = () => {
        navigation.navigate('SendMessageScreen', {chatCompanion: subUser});
    };

    return (
        <View style={[styles.itemContainer, {paddingLeft: index === 0 ? SIZE.width.w18 : 0}]}>
            <TouchableOpacity onPress={sendMessageScreenHandler} activeOpacity={.5}>
                <View style={[styles.avatarContainer, {backgroundColor: avatarBackground}]}>
                    <FastImage style={{width: '90%', height: '90%'}}
                               source={{uri: avatarUrl, priority: FastImage.priority.high}}
                               resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
            </TouchableOpacity>
            <View>
                <CustomText textStyle={styles.userName}>
                    {nikName.length < 11 ? nikName : `${nikName.substr(0, 10)}..`}
                </CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: SIZE.width.w16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE.width.w68,
        height: SIZE.width.w68,
        borderRadius: SIZE.borderRadius.br26,
        overflow: 'hidden',
    },
    userName: {
        marginTop: SIZE.height.h3,
        color: 'rgba(255, 255, 255, 0.6)'
    }
});

export default HorizontalFriend;


