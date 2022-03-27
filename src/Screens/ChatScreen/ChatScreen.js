import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {AvatarAndTitle, RootScreenTemplate} from '../../Components';
import {Chats, ChatSearchBar, HorizontalFriendsCarousel} from '../../Components/Chat';
import {authService, snapshotService} from '../../services';
import {getUserThunk} from '../../Redux/slices';

const ChatScreen = (props) => {
    const {uid} = useSelector(state => state['auth']);

    const [subscriptions, setSubscriptions] = useState([]);
    const [filterSubscriptions, setFilterSubscriptions] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (uid) {
            return snapshotService.getSubscriptionsAndSubscribers(uid, setSubscriptions, setFilterSubscriptions);
        }
        authService.getUid();
    }, []);

    const filterHandler = (text) => {
        let copySubscriptions = JSON.stringify(subscriptions);
        copySubscriptions = JSON.parse(copySubscriptions);
        const filterArray = copySubscriptions.filter(item => item.nikName.toLowerCase().includes(text.toLowerCase()));
        setFilterSubscriptions(filterArray);
    };

    const onRefresh = async () => {
        setRefreshing(true);
        if (uid) {
            await snapshotService.getSubscriptionsAndSubscribers(uid, setSubscriptions, setFilterSubscriptions);
        }
        await authService.getUid();
        setRefreshing(false);
    };

    return (
        <RootScreenTemplate
            headerComponent={<AvatarAndTitle title={'Chats'}/>}
            refreshing={refreshing}
            onRefresh={onRefresh}
        >
            <ChatSearchBar callback={filterHandler}/>
            <HorizontalFriendsCarousel subscriptions={filterSubscriptions}/>
            <Chats subscriptions={subscriptions}/>
        </RootScreenTemplate>
    );
};
export default ChatScreen;


