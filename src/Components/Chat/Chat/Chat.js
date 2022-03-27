import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

import {CustomText} from '../../index';
import {SIZE, THEME} from '../../../constants';
import {snapshotService} from '../../../services';

const Chat = ({user}) => {
    const navigation = useNavigation();

    const [lastMessage, setLastMessage] = useState('');
    const [numberNotSeenMessages, setNumberNotSeenMessages] = useState(0);

    const {uid} = useSelector(state => state['auth']);
    const {avatarUrl, nikName, avatarBackground, id} = user;

    useEffect(() => {
        if (uid) {
            return snapshotService.getChat(uid, `${uid}${id}`, setLastMessage, setNumberNotSeenMessages);
        }
    }, []);

    const goToChat = () => {
        navigation.navigate('SendMessageScreen', {chatCompanion: user});
    };

    if (lastMessage) {
        return (
            <TouchableOpacity onPress={goToChat} activeOpacity={.5}>
                <View style={styles.chatContainer}>
                    <View style={styles.mainContainer}>
                        <View style={styles.leftContainer}>
                            <View style={[styles.avatarContainer, {backgroundColor: avatarBackground}]}>
                                <FastImage
                                    style={{width: '100%', height: '100%'}}
                                    source={{uri: avatarUrl, priority: FastImage.priority.high}}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <CustomText>{nikName}</CustomText>
                                <CustomText numberOfLines={1}>{lastMessage}</CustomText>
                            </View>
                        </View>
                        {
                            numberNotSeenMessages !== 0 &&
                            <View style={styles.circleNotShowMessage}>
                                <CustomText textStyle={styles.circleText}>{numberNotSeenMessages}</CustomText>
                            </View>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return null
};


const styles = StyleSheet.create({
    chatContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZE.width.w15,
        paddingVertical: SIZE.height.h12,
        borderRadius: SIZE.borderRadius.br12,
        marginBottom: SIZE.height.h10,
        backgroundColor: THEME.white5
    },
    mainContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flexDirection: 'row'
    },
    avatarContainer: {
        width: SIZE.height.h42,
        height: SIZE.height.h42,
        borderRadius: SIZE.borderRadius.br17,
        overflow: 'hidden',
        marginRight: SIZE.width.w16
    },
    textContainer: {
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '75%',
        position: 'relative'
    },
    circleNotShowMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE.height.h20,
        height: SIZE.height.h20,
        borderRadius: SIZE.height.h20 / 2,
        backgroundColor: THEME.marine
    },
    circleText: {
        fontSize: SIZE.fontSize.fs10,
        fontWeight: 'bold',
        lineHeight: SIZE.lineHeight.lh15,
    }
});

export default Chat;


