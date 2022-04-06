import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';

import Message from '../Message/Message';
import {snapshotService} from '../../../services';
import {setShowMessageThunk} from '../../../Redux/slices';
import NoInternetConnection from '../../NoIternetConnection/NoInternetConnection';

const MessagesList = ({chatCompanionId, messagesRef}) => {
    const dispatch = useDispatch();
    const netInfo = useNetInfo();

    const {uid} = useSelector(state => state['auth']);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const chatId = `${uid}${chatCompanionId}`;
        return snapshotService.getChatMessages(chatId, setMessages);
    }, []);

    useEffect(() => {
        messagesRef.current = messages;
    },[messages]);

    useEffect(() => {
        if (messages.length !== 0) dispatch(setShowMessageThunk({uid, chatCompanionId}));
    }, [messages]);

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={messages}
                inverted
                keyExtractor={item => item.id}
                renderItem={({item: {message, date, userId, isNewDate}}) => (
                    <Message
                        isNewDate={isNewDate}
                        message={message}
                        date={date}
                        isLeft={userId !== uid}
                    />
                )}
            />
            {netInfo.isConnected === false && <NoInternetConnection visible={true} isBtn={false}/>}
        </View>
    );
};

export default MessagesList;


