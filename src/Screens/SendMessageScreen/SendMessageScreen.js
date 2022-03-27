import React from 'react';
import {View} from 'react-native';

import {AvatarAndTitle, CenterLinerGradient} from '../../Components';
import MessagesList from '../../Components/SendMessage/MessageList/MessageList';
import SendMessageBar from '../../Components/SendMessage/SendMessageBar/SendMessageBar';

const SendMessageScreen = ({route: {params: {chatCompanion}}}) => {
    return (
        <View style={{flex: 1}}>
            <CenterLinerGradient/>
            <AvatarAndTitle
                title={'Chat'}
                isButton={true}
                chatCompanion={chatCompanion}
            />
            <MessagesList chatCompanionId={chatCompanion.id}/>
            <SendMessageBar chatCompanionId={chatCompanion.id}/>
        </View>
    );
};

export default SendMessageScreen;