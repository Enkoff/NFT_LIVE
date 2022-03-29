import {firestore, storage} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';
import {deletePushBadge} from '../config';
import {pushModel} from '../model/pushModel/pushModel';
import {getFullDate} from '../config/module/getFullDate';

//ПЕРЕПИСАТИ DELETE MESSAGE BADGE
export const userService = {
    getUserByUid: (uid) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .get()
        .then(res => res.data()),
    getUserGalleryById: async (uid) => {
        const res = (await firestore()
            .collection(firestoreLib.nft.collection)
            .where(firestoreLib.where.authorId, '==', uid)
            .orderBy(firestoreLib.orderBy.createDate, 'asc')
            .get()).docs;
        const respData = [];
        res.forEach(nft => {
            respData.push(nft.data());
        });
        return respData;
    },
    updateUserInfoByUid: async (uid, fields) => {
        const {name, nikName, email, bio} = fields;
        await firestore()
            .collection(firestoreLib.users.collection)
            .doc(uid)
            .update({name, nikName, email, bio});
    },
    ////////////////////
    addAndDeleteGalleryItem: (uid, galleryItem, isAdd) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .update({
            gallery: isAdd
                ? firestore.FieldValue.arrayUnion(galleryItem)
                : firestore.FieldValue.arrayRemove(galleryItem)
        }),
    addAndDeleteGalleryItemLike: async (itemId, userId, authorId, isAdd) => {
        const authorRef = firestore().collection(firestoreLib.users.collection).doc(authorId);

        await firestore().runTransaction(transaction => {
            return transaction.get(authorRef).then(doc => {
                const gallery = doc.data()[firestoreLib.users.gallery];

                const itemIndex = gallery.findIndex(item => item.id === itemId);
                if (isAdd) {
                    gallery[itemIndex].likes.push(userId);
                } else {
                    gallery[itemIndex].likes = gallery[itemIndex].likes.filter(item => item !== userId);
                }

                transaction.update(authorRef, {[firestoreLib.users.gallery]: gallery});
            });
        });
    },
    addRetweetsGalleryItem: async (authorId, itemId) => {
        const authorRef = firestore().collection(firestoreLib.users.collection).doc(authorId);

        await firestore().runTransaction(transaction => {
            return transaction.get(authorRef).then(doc => {
                const gallery = doc.data()[firestoreLib.users.gallery];

                const itemIndex = gallery.findIndex(item => item.id === itemId);
                gallery[itemIndex].retweets += 1;

                transaction.update(authorRef, {[firestoreLib.users.gallery]: gallery});
            });
        });
    },
    updateGalleryItem: async (uid, itemId, inputs) => {
        const userRef = firestore().collection(firestoreLib.users.collection).doc(uid);

        await firestore().runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                const gallery = doc.data()[firestoreLib.users.gallery];

                const itemIndex = gallery.findIndex(item => item.id === itemId);
                for (let input in inputs) {
                    gallery[itemIndex][input] = inputs[input];
                }
                transaction.update(userRef, {[firestoreLib.users.gallery]: gallery});
            });
        });
    },
    updateAllGalleryItem: async (uid, fields) => {
        const userRef = firestore().collection(firestoreLib.users.collection).doc(uid);

        await firestore().runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                const gallery = doc.data()[firestoreLib.users.gallery];

                gallery.map(item => {
                    for (const key in fields) {
                        item[key] = fields[key];
                    }
                    return item;
                });
                transaction.update(userRef, {[firestoreLib.users.gallery]: gallery});
            });
        });
    },
    deleteStorageImg: (imgStoragePath) => {
        imgStoragePath && storage().ref(imgStoragePath).delete();
    },
    updateUserAvatarAndBgColor: (uid, avatarBackground, avatarUrl) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .update({avatarUrl, avatarBackground}),
    updateAvatarAndAvatarStoragePath: async (uid, avatarBackground, avatarUrl, pathStorage) => {
        await firestore()
            .collection(firestoreLib.users.collection)
            .doc(uid)
            .update({avatarUrl, avatarBackground, oldAvatarFileName: pathStorage});
    },
    addAndDeleteCollectionName: (uid, collectionNameObj, isAdd) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .update({
            collectionsNames: isAdd
                ? firestore.FieldValue.arrayUnion(collectionNameObj)
                : firestore.FieldValue.arrayRemove(collectionNameObj)
        }),
    updateCollectionName: async (uid, oldItem, newName) => {
        const userRef = firestore().collection(firestoreLib.users.collection).doc(uid);

        await firestore().runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                const collectionsNames = doc.data()[firestoreLib.users.collectionsNames];
                const gallery = doc.data()[firestoreLib.users.gallery];

                const itemIndex = collectionsNames.findIndex(item => item.id === oldItem.id);
                collectionsNames[itemIndex].collectionName = newName;

                gallery.map(item => {
                    if (item.collectionName === oldItem.collectionName) {
                        item.collectionName = newName;
                        return item;
                    }
                    return item;
                });

                transaction.update(userRef, {
                    [firestoreLib.users.collectionsNames]: collectionsNames,
                    [firestoreLib.users.gallery]: gallery,
                });
            });
        });
    },
    followUnfollow: async (userId, followUserId, followObj, userObj) => {
        const currentUserRef = firestore().collection(firestoreLib.users.collection).doc(userId);
        const followUserRef = firestore().collection(firestoreLib.users.collection).doc(followUserId);

        await firestore().runTransaction(transaction => {
            return transaction.get(currentUserRef).then(doc => {
                const subscriptions = doc.data().subscriptions;

                const isFollow = subscriptions.some(item => item.id === followUserId);

                let updateSubscriptions = subscriptions;

                if (isFollow) {
                    updateSubscriptions = subscriptions.filter(item => item.id !== followUserId);
                } else {
                    updateSubscriptions.push(followObj);
                }

                transaction.update(currentUserRef, {[firestoreLib.users.subscriptions]: updateSubscriptions});
            });
        });

        await firestore().runTransaction(transaction => {
            return transaction.get(followUserRef).then(doc => {
                const subscribers = doc.data().subscribers;
                const pushMessages = doc.data().pushMessages;
                const pushMessagesDate = doc.data().pushMessagesDate;

                const isSubscribers = subscribers.some(item => item.id === userId);

                let updateSubscribers = subscribers;
                let push;

                if (isSubscribers) {
                    push = new pushModel({
                        imgUrl: userObj.avatarUrl,
                        imgBg: userObj.avatarBackground,
                        title: 'UNFOLLOW',
                        subTitle: `${userObj.nikName} unsubscribed from you!`
                    });
                    updateSubscribers = subscribers.filter(item => item.id !== userId);
                } else {
                    push = new pushModel({
                        imgUrl: userObj.avatarUrl,
                        imgBg: userObj.avatarBackground,
                        title: 'FOLLOW',
                        subTitle: `${userObj.nikName} subscribed to you!`
                    });
                    updateSubscribers.push(userObj);
                }

                const isDate = pushMessagesDate.some(date => date === getFullDate(push.date));

                let updatePushMessageDate;
                if (isDate) {
                    updatePushMessageDate = pushMessagesDate;
                } else {
                    updatePushMessageDate = [getFullDate(push.date), ...pushMessagesDate];
                }

                transaction.update(followUserRef, {
                    [firestoreLib.users.subscribers]: updateSubscribers,
                    [firestoreLib.users.pushMessages]: [push, ...pushMessages],
                    [firestoreLib.users.pushMessagesDate]: updatePushMessageDate
                });
            });
        });
    },
    updateNotificationByUserId: async (uid, pushId) => {
        const userRef = firestore().collection(firestoreLib.users.collection).doc(uid);

        await firestore().runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                const pushMessages = doc.data().pushMessages;
                const updatePush = pushMessages.filter(push => push.id !== pushId);

                transaction.update(userRef, {[firestoreLib.users.pushMessages]: updatePush});
            });
        });
    },
    addChat: async (userChatId, companionChatId) => {
        const chatRef = await firestore().collection(firestoreLib.chats.collection).doc(userChatId);
        const companionChatRef = await firestore().collection(firestoreLib.chats.collection).doc(companionChatId);

        await firestore().runTransaction(transaction => {
            return transaction.get(chatRef).then(doc => {
                const isChat = doc.data();
                if (!isChat) {
                    transaction.set(chatRef, {chat: []});
                }
            });
        });

        await firestore().runTransaction(transaction => {
            return transaction.get(companionChatRef).then(doc => {
                const isChat = doc.data();
                if (!isChat) {
                    transaction.set(companionChatRef, {chat: []});
                }
            });
        });
    },
    addChatMessage: async (uid, chatCompanionId, message) => {
        const companionRef = firestore().collection(firestoreLib.users.collection).doc(chatCompanionId);

        await firestore()
            .collection(firestoreLib.chats.collection)
            .doc(`${uid}${chatCompanionId}`)
            .update({
                chat: firestore.FieldValue.arrayUnion(message)
            });
        await firestore()
            .collection(firestoreLib.chats.collection)
            .doc(`${chatCompanionId}${uid}`)
            .update({
                chat: firestore.FieldValue.arrayUnion(message),
            });
        await firestore().runTransaction(transaction => {
            return transaction.get(companionRef).then(doc => {
                let notShowMessage = doc.data().notShowMessage;
                transaction.update(companionRef, {notShowMessage: notShowMessage += 1});
            });
        });
    },
    //ПЕРЕПИСАТИ ВИДАЛЕННЯ НЕПРОЧИТАНИХ ПОВІДОМЛЕНЬ!!!!
    setShowMessage: async (uid, chatCompanionId) => {
        const userChatId = `${uid}${chatCompanionId}`;
        const companionChatId = `${chatCompanionId}${uid}`;

        const userChatRef = await firestore().collection(firestoreLib.chats.collection).doc(userChatId);
        const companionChatRef = await firestore().collection(firestoreLib.chats.collection).doc(companionChatId);
        const userRef = await firestore().collection(firestoreLib.users.collection).doc(uid);

        let numberIsShow = 0;

        await firestore().runTransaction(transaction => {
            return transaction.get(companionChatRef).then(doc => {
                const userChat = doc.data().chat;

                const updateUserChat = userChat.map(message => {
                    if (message.userId === chatCompanionId) {
                        if (message.isShow === false) {
                            numberIsShow += 1;
                            message.isShow = true;
                        }

                        return message;
                    }
                    return message;
                });

                transaction.update(userChatRef, {chat: updateUserChat});
            });
        });

        await firestore().runTransaction(transaction => {
            return transaction.get(companionChatRef).then(doc => {
                const companionChat = doc.data().chat;

                const updateCompanionChat = companionChat.map(message => {
                    if (message.userId === chatCompanionId) {
                        message.isShow = true;
                        return message;
                    }
                    return message;
                });

                transaction.update(companionChatRef, {chat: updateCompanionChat});
            });
        });

        await firestore().runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                // let notShowMessage = doc.data().notShowMessage;
                transaction.update(userRef, {notShowMessage: 0});
            });
        });
    },
    //ПЕРЕВІРИТИ МОЖЛИВО ВИПРАВИТИ СЕРВІСИ!!!!!
    deleteMessageBadge: async (uid = 'iyJyDVnOOeeFAgwKELdIMmst5yV2') => {
        const pushMessage = await firestore()
            .collection(firestoreLib.users.collection)
            .doc(uid)
            .get()
            .then(res => res.data())
            .then(data => data[firestoreLib.users.pushMessages]);
        await firestore()
            .collection(firestoreLib.users.collection)
            .doc(uid)
            .update({pushMessages: deletePushBadge(pushMessage)});
    },
};
