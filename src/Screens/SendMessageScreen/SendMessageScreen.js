import React, {useRef} from 'react';
import {View} from 'react-native';

import {AvatarAndTitle, CenterLinerGradient} from '../../Components';
import MessagesList from '../../Components/SendMessage/MessageList/MessageList';
import SendMessageBar from '../../Components/SendMessage/SendMessageBar/SendMessageBar';

const SendMessageScreen = ({route: {params: {chatCompanion}}}) => {
    const messagesRef = useRef();

    return (
        <View style={{flex: 1}}>
            <CenterLinerGradient/>
            <AvatarAndTitle
                title={'Chat'}
                isButton={true}
                chatCompanion={chatCompanion}
            />
            <MessagesList messagesRef={messagesRef}  chatCompanionId={chatCompanion.id}/>
            <SendMessageBar messagesRef={messagesRef} chatCompanionId={chatCompanion.id}/>
        </View>
    );
};

export default SendMessageScreen;
