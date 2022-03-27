import React from 'react';
import {StyleSheet, View} from 'react-native';
import Chat from '../Chat/Chat';
import {SIZE} from '../../../constants';

const Chats = ({subscriptions}) => {
    return (
        <View style={styles.chatsContainer}>
            {subscriptions.map((subscription, index) => <Chat key={subscription.id} index={index} user={subscription}/>)}
        </View>
    );
};

const styles = StyleSheet.create({
    chatsContainer: {
        marginTop: SIZE.height.h16,
        marginBottom: SIZE.height.h150,
        paddingHorizontal: SIZE.width.w18,
    }
});

export default Chats;


