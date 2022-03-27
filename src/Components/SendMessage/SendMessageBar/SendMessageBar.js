import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {useNetInfo} from '@react-native-community/netinfo';

import {ROOT_STYLE, SIZE, THEME} from '../../../constants';
import {TopArrowSvg} from '../../SVG';
import {MessageModel} from '../../../model';
import {addChatMessageThunk} from '../../../Redux/slices';

const SendMessageBar = ({chatCompanionId}) => {
    const dispatch = useDispatch();
    const netInfo = useNetInfo();
    const {uid} = useSelector(state => state['auth']);

    const [message, setMessage] = useState('');

    const sendMessageHandler = () => {
        const newMessage = new MessageModel({
            userId: uid,
            time: moment().format('LT'),
            message
        });
        if (message) {
            if (netInfo.isConnected) {
                dispatch(addChatMessageThunk({uid, chatCompanionId, newMessage}));
                setMessage('');
            }
        }
    };

    return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.inputAndArrow}>
                    <TextInput
                        multiline
                        placeholder={'Type something...'}
                        style={[ROOT_STYLE, styles.input]}
                        onChangeText={text => setMessage(text)}
                        value={message}
                        placeholderTextColor={THEME.white40}
                    />
                </View>
                <TouchableOpacity onPress={sendMessageHandler} activeOpacity={.7}>
                    <View style={styles.sendIconContainer}>
                        <TopArrowSvg width={SIZE.width.w15} height={SIZE.width.w21}/>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: THEME.menu,
    },
    innerContainer: {
        paddingVertical: SIZE.height.h20,
        paddingHorizontal: SIZE.width.w15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputAndArrow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.white5,
        borderWidth: 1,
        borderColor: THEME.white5,
        borderRadius: SIZE.borderRadius.br12,
        flex: 3,
        marginRight: SIZE.width.w10,
        paddingHorizontal: SIZE.width.w18,
        justifyContent: 'space-between'
    },
    sendIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZE.width.w42,
        height: SIZE.width.w42,
        borderRadius: SIZE.borderRadius.br17,
        backgroundColor: '#6096FF',
    },
    input: {
        flex: 3,
        maxHeight: SIZE.height.h73,
    }
});

export default SendMessageBar;


