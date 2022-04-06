import {firestore, storage} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';
import {pushModel} from '../model/pushModel/pushModel';

//ПЕРЕПИСАТИ DELETE MESSAGE BADGE
export const userService = {
    getUserByUid: ({uid}) => firestore()
        .collection(firestoreLib.users.collection)
        .doc(uid)
        .get()
        .then(res => res.data()),
    getUserGalleryByUid: async ({uid}) => {
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
    addAndDeleteCollectionNameByUid: async ({uid, collectionObj, isAdd}) => {
        await firestore()
            .collection(firestoreLib.users.collection)
            .doc(uid)
            .update({
                collectionsNames: isAdd
                    ? firestore.FieldValue.arrayUnion(collectionObj)
                    : firestore.FieldValue.arrayRemove(collectionObj)
            });
    },
    addChat: async ({uid, chatCompanionId, newMessage}) => {
        const userChatId = `${uid}${chatCompanionId}`;
        const companionChatId = `${chatCompanionId}${uid}`;

        for (const chatId of [userChatId, companionChatId]) {
            await firestore().collection(firestoreLib.chats.collection).doc(chatId).set({chat: [newMessage], chatId});
        }
    },
    addChatMessage: async ({uid, chatCompanionId, newMessage}) => {
        const userChatId = `${uid}${chatCompanionId}`;
        const companionChatId = `${chatCompanionId}${uid}`;

        for (const chatId of [userChatId, companionChatId]) {
            await firestore()
                .collection(firestoreLib.chats.collection)
                .doc(chatId)
                .update({
                    'chat': firestore.FieldValue.arrayUnion(newMessage)
                });
        }
    },
    updateUserByUidAndFields: async ({uid, updateFields}) => {
        const userRef = await firestore().collection(firestoreLib.users.collection).doc(uid);
        const batch = await firestore().batch();
        for (const key in updateFields) {
            batch.update(userRef, {[key]: updateFields[key]});
        }
        batch.commit();
    },
    follow: async ({userObj, followUserObj}) => {
        const userRef = firestore().collection(firestoreLib.users.collection).doc(userObj.id);
        const followUserRef = firestore().collection(firestoreLib.users.collection).doc(followUserObj.id);

        await userRef.update({'subscriptions': firestore.FieldValue.arrayUnion(followUserObj)});
        await followUserRef.update({'subscribers': firestore.FieldValue.arrayUnion(userObj)});

        const followPushMessage = new pushModel({
            userId: followUserObj.id,
            imgUrl: userObj.avatarUrl,
            imgBg: userObj.avatarBackground,
            title: 'FOLLOW',
            subTitle: `${userObj.nikName} subscribe to you!`
        });

        await firestore().collection('notifications').doc(followPushMessage.id).set(followPushMessage);
    },
    unfollow: async ({userObj, followUserObj}) => {
        const userRef = firestore().collection(firestoreLib.users.collection).doc(userObj.id);
        const followUserRef = firestore().collection(firestoreLib.users.collection).doc(followUserObj.id);

        const subscriptionsDeleteObj = await userRef.get()
            .then(res => res.data().subscriptions.find(item => item.id === followUserObj.id));

        const subscribersDeleteObj = await followUserRef.get()
            .then(res => res.data().subscribers.find(item => item.id === userObj.id));

        await userRef.update({'subscriptions': firestore.FieldValue.arrayRemove(subscriptionsDeleteObj)});
        await followUserRef.update({'subscribers': firestore.FieldValue.arrayRemove(subscribersDeleteObj)});

        const followPushMessage = new pushModel({
            userId: followUserObj.id,
            imgUrl: userObj.avatarUrl,
            imgBg: userObj.avatarBackground,
            title: 'UNFOLLOW',
            subTitle: `${userObj.nikName} unsubscribe from you!`
        });

        await firestore().collection('notifications').doc(followPushMessage.id).set(followPushMessage);
    },
    updateCollectionName: async ({uid, collectionId, newName}) => {
        const userRef = await firestore().collection(firestoreLib.users.collection).doc(uid);

        await firestore().runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                const collectionsNames = doc.data()['collectionsNames'];

                const index = collectionsNames.findIndex(item => item.id === collectionId);
                collectionsNames[index].collectionName = newName;

                transaction.update(userRef, {'collectionsNames': collectionsNames});
            });
        });
    },
    setShowMessage: async (uid, chatCompanionId) => {
        const userChatId = `${uid}${chatCompanionId}`;
        const companionChatId = `${chatCompanionId}${uid}`;

        const userChatRef = firestore().collection(firestoreLib.chats.collection).doc(userChatId);
        const companionChatRef = firestore().collection(firestoreLib.chats.collection).doc(companionChatId);

        [userChatRef, companionChatRef].forEach((ref) => {
            firestore().runTransaction(transaction => {
                return transaction.get(ref).then(doc => {
                    const chat = doc.data().chat;

                    chat.map(message => {
                        if (message.userId === chatCompanionId && message.isShow === false) {
                            message.isShow = true;
                            return message;
                        }
                        return message;
                    });

                    transaction.update(ref, {chat});
                });
            });
        });
    },
    deleteStorageImg: (imgStoragePath) => {
        imgStoragePath && storage().ref(imgStoragePath).delete();
    },
    deletePushNotificationByPushId: async ({pushId}) => {
        await firestore().collection(firestoreLib.notifications.collection).doc(pushId).delete();
    },
    deleteMessageBadge: async ({uid}) => {
        await firestore()
            .collection(firestoreLib.notifications.collection)
            .where(firestoreLib.where.userId, '==', uid)
            .get()
            .then(snapshot => {
                const batch = firestore().batch();

                snapshot.docs.forEach(doc => {
                    const nftRef = doc.ref;
                    batch.update(nftRef, {'isShow': true});
                });
                batch.commit();
            });
    },
};
