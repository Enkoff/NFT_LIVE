import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';
import {setPushBadge} from '../config';

export const snapshotService = {
    getNotifications: (id, callback) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(id)
        .onSnapshot(snapshot => {
            const pushMessage = snapshot.data().pushMessages;
            callback(pushMessage);
        }),
    getMessageBadge: (uid, setBadge) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .onSnapshot(snapshot => {
            const badge = setPushBadge(snapshot.data().pushMessages);
            badge > 0 ? setBadge(badge) : setBadge(null);
        }),
    getAllNotShowChatsMessageBadge: (uid, setBadge) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .onSnapshot(snapshot => {
            const badge = snapshot.data().notShowMessage;
            badge > 0 ? setBadge(badge) : setBadge(null);
        }),
    // getNftLiveTop: (callback) => firestore()
    //     .collection(firestoreLib.nftLiveTop.collection)
    //     .doc(firestoreLib.nftLiveTop.doc)
    //     .onSnapshot(snapshot => {
    //         const nftLiveTop = snapshot.data()[firestoreLib.nftLiveTop.arrayName];
    //         callback(nftLiveTop);
    //     }),
    // getNftLiveTop: (callback, startAfter = '', setLoading) => {
    //     firestore().collection('nft').onSnapshot(async () => {
    //         const data = [];
    //         const response = (await firestore()
    //             .collection('nft')
    //             .orderBy('ethPrice')
    //             .startAfter(startAfter)
    //             .limit(2)
    //             .where('isNftLiveTop', '==', true)
    //             .get()).docs;
    //         response.forEach(el => {
    //             data.push(el.data());
    //         });
    //         callback(prev => [...prev, ...data]);
    //         if (data.length === 0) {
    //             // setLoading(false);
    //         }
    //     });
    // },
    getUsers: (uid, callback, callbackTwo) => firestore()
        .collection(firestoreLib.users.collection)
        .onSnapshot(snapshot => {
            const users = [];
            snapshot.docs.forEach(user => {
                const currentUser = user.data();
                if (currentUser.id !== uid) {
                    users.push({
                        id: currentUser.id,
                        nikName: currentUser.nikName,
                        avatarUrl: currentUser.avatarUrl,
                        avatarBackground: currentUser.avatarBackground
                    });
                }
            });
            const filterUser = users.sort((a, b) => a.nikName - b.nikName);

            //TEST
            // const arr = [
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            //     ...filterUser,
            // ];
            /////////////////////////
            callback(filterUser);
            callbackTwo && callbackTwo(filterUser);
        }),
    getUserById: (uid, callback, callbackTwo) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .onSnapshot(snapshot => {
            callback(snapshot.data());
            callbackTwo(snapshot.data()[firestoreLib.users.gallery]);
        }),
    getChatMessages: (chatId, callback) => firestore()
        .collection(firestoreLib.chats.collection)
        .doc(chatId)
        .onSnapshot(snapshot => {
            callback(snapshot.data().chat.reverse());
        }),
    getSubscriptionsAndSubscribers: (uid, callback, callbackTwo) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .onSnapshot(snapshot => {
            // const arr = [
            //     ...snapshot.data().subscriptions,
            //     ...snapshot.data().subscriptions,
            //     ...snapshot.data().subscriptions,
            //     ...snapshot.data().subscriptions,
            //     ...snapshot.data().subscriptions,
            //     ...snapshot.data().subscriptions,
            //     ...snapshot.data().subscriptions,
            //     ...snapshot.data().subscriptions,
            // ];
            callback(snapshot.data().subscriptions);
            callbackTwo(snapshot.data().subscriptions);
        }),
    getChat: (uid, chatId, setLastMessage, setNumberNotSeenMessages) => firestore()
        .collection(firestoreLib.chats.collection)
        .doc(chatId)
        .onSnapshot(snapshot => {
            const chat = snapshot.data().chat;
            const chatLength = chat.length - 1;

            if (chatLength >= 0) {
                setLastMessage(chat[chatLength].message);

                if (chatLength > 0) {
                    const numberNotShowMessage = chat.filter(message => {
                        if (message.userId !== uid && !message.isShow) {
                            return message;
                        }
                    }).length;
                    setNumberNotSeenMessages(numberNotShowMessage);
                }
            }
        }),
};
