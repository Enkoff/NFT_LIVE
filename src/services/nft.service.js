import {firestore, storage} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const nftService = {
    getNftLiveTop: async () => {
        const res = (await firestore()
            .collection(firestoreLib.nft.collection)
            .orderBy(firestoreLib.orderBy.soldSum, firestoreLib.orderBy.desc)
            .orderBy(firestoreLib.orderBy.createDate, firestoreLib.orderBy.desc)
            .where(firestoreLib.where.isNftLiveTop, '==', true)
            .get()).docs;
        const respData = [];
        res.forEach(nft => {
            respData.push(nft.data());
        });
        return respData;
    },
    addNft: async ({galleryItem}) => {
        await firestore().collection(firestoreLib.nft.collection).doc(galleryItem.id).set(galleryItem);
    },
    addAndDeleteLike: async ({isAdd, itemId, uid}) => {
        await firestore()
            .collection(firestoreLib.nft.collection)
            .doc(itemId)
            .update({
                'likes': isAdd
                    ? firestore.FieldValue.arrayUnion(uid)
                    : firestore.FieldValue.arrayRemove(uid)
            });
    },
    addRetweetByNftId: async ({nftId}) => {
        await firestore()
            .collection(firestoreLib.nft.collection)
            .doc(nftId)
            .update({'retweets': firestore.FieldValue.increment(1)});
    },
    updateNftByAuthorIdAndFieldsKey: async ({uid, updateFields}) => {
        await firestore()
            .collection(firestoreLib.nft.collection)
            .where(firestoreLib.where.authorId, '==', uid)
            .get()
            .then(snapshot => {
                const batch = firestore().batch();
                snapshot.docs.forEach(doc => {
                    const nftRef = doc.ref;

                    for (const key in updateFields) {
                        batch.update(nftRef, {[key]: updateFields[key]});
                    }
                });
                batch.commit();
            });
    },
    updateNftByCollectionName: async ({uid, oldCollectionName, newName}) => {
        await firestore()
            .collection(firestoreLib.nft.collection)
            .where(firestoreLib.where.authorId, '==', uid)
            .where(firestoreLib.where.collectionName, '==', oldCollectionName)
            .get()
            .then(snapshot => {
                const batch = firestore().batch();
                snapshot.docs.forEach(doc => {
                    const nftRef = doc.ref;
                    batch.update(nftRef, {[firestoreLib.where.collectionName]: newName});
                });
                batch.commit();
            });
    },
    updateNftByNftId: async ({nftId, updateFields}) => {
        const batch = firestore().batch();

        await firestore()
            .collection(firestoreLib.nft.collection)
            .where(firestoreLib.where.id, '==', nftId)
            .get()
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    const nftRef = doc.ref;

                    for (const key in updateFields) {
                        batch.update(nftRef, {[key]: updateFields[key]});
                    }
                });
                batch.commit();
            });
    },
    deleteNftByDocId: async ({itemId}) => {
        await firestore().collection(firestoreLib.nft.collection).doc(itemId).delete();
    },
    deleteNftImgByStoragePath: (imgStoragePath) => storage().ref(imgStoragePath).delete(),
    // updateNftAvatarByUid: async (uid,) => {
    //     await firestore()
    //         .collection(firestoreLib.nft.collection)
    //         .where(firestoreLib.where.authorId, '==', uid)
    //         .get()
    //         .then(snapshot => {
    //             const batch = firestore().batch();
    //             snapshot.docs.forEach(doc => {
    //                 const nftRef = doc.ref;
    //                 batch.update(nftRef, {authorAvatar});
    //             });
    //             batch.commit();
    //         });
    // }
};
