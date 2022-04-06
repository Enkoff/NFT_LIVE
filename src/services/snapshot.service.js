import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';
import {setPushBadge} from '../config';

export const snapshotService = {
    getNotifications: (uid, callback) => firestore()
        .collection(firestoreLib.notifications.collection)
        .where(firestoreLib.where.userId, '==', uid)
        .onSnapshot(snapshot => {
            const tmp = [];
            snapshot.docs.forEach(el => {
                tmp.push(el.data());
            });
            const sortNotification = tmp.sort((a, b) => b.date - a.date);
            callback(sortNotification);
        }),
    getMessageBadge: (uid, setBadge) => firestore()
        .collection(firestoreLib.notifications.collection)
        .where(firestoreLib.where.userId, '==', uid)
        .onSnapshot(snapshot => {
            const tmp = [];
            snapshot.docs.forEach(el => {
                tmp.push(el.data());
            });

            const badge = setPushBadge(tmp);
            badge > 0 ? setBadge(badge) : setBadge(null);
        }),
    getAllNotShowChatsMessageBadge: (uid, setBadge) => {
        firestore()
            .collection(firestoreLib.chats.collection)
            .onSnapshot(snapshot => {
                let badge = null;
                snapshot.docs.forEach(chat => {
                    if (chat.id.indexOf(uid) === 0) {
                        chat.data().chat.forEach(el => {
                            if (el.userId !== uid && !el.isShow) {
                                badge += 1;
                            }
                        });
                    }
                });
                setBadge(badge);
            });
    },
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
