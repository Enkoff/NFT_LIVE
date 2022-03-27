import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';

import Message from '../Message/Message';
import {snapshotService} from '../../../services';
import {setShowMessageThunk} from '../../../Redux/slices';
import NoInternetConnection from '../../NoIternetConnection/NoInternetConnection';


const MessagesList = ({chatCompanionId}) => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state['auth']);
    const [messages, setMessages] = useState([]);
    const netInfo = useNetInfo();

    useEffect(() => {
        return getMessage();
    }, []);

    useEffect(() => {
        if (messages.length !== 0) {
            dispatch(setShowMessageThunk({uid, chatCompanionId}));
        }
    }, [messages]);

    const getMessage = () => {
        snapshotService.getChatMessages(`${uid}${chatCompanionId}`, setMessages);
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={messages}
                inverted
                ke
                renderItem={({item: {message, time, userId}}) => (
                    <Message
                        keyExtractor={item => item.id}
                        message={message}
                        time={time}
                        isLeft={userId !== uid}
                    />
                )}
            />
            {netInfo.isConnected === false && <NoInternetConnection visible={true} isBtn={false}/>}
        </View>
    );
};

export default MessagesList;


