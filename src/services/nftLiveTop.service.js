import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const nftLiveTopService = {
    getNftLiveTopByLimit: (async limit => {
        const res = (await firestore()
            .collection(firestoreLib.nft.collection)
            .orderBy('ethPrice')
            .limit(limit)
            .where('isNftLiveTop', '==', true)
            .get()).docs;
        const respData = [];
        res.forEach(nft => {
            respData.push(nft.data());
        });
        return respData;
    }),
    getNftLiveTopByStartAfter: async (startAfter, limit, callback) => {
        const res = (await firestore()
            .collection(firestoreLib.nft.collection)
            .orderBy('ethPrice')
            .startAfter(startAfter)
            .limit(limit)
            .where('isNftLiveTop', '==', true)
            .get()).docs;
        const respData = [];
        res.forEach(nft => {
            respData.push(nft.data());
        });
        if (respData.length === 0) {
            callback(false);
        }
        return respData;
    },
    // firestore().collection('nft').onSnapshot(async () => {
    //     const data = [];
    //     const response = (await firestore()
    //         .collection('nft')
    //         .orderBy('ethPrice')
    //         .startAfter(startAfter)
    //         .limit(2)
    //         .where('isNftLiveTop', '==', true)
    //         .get()).docs;
    //     response.forEach(el => {
    //         data.push(el.data());
    //     });
    //     callback(prev => [...prev, ...data]);
    //     if (data.length === 0) {
    //         // setLoading(false);
    //     }
    // });
    addAndDeleteGalleryItem: (galleryItem, isAdd) => firestore()
        .collection(firestoreLib.nftLiveTop.collection)
        .doc(firestoreLib.nftLiveTop.doc)
        .update({
            nftLiveTopArray: isAdd
                ? firestore.FieldValue.arrayUnion(galleryItem)
                : firestore.FieldValue.arrayRemove(galleryItem)
        }),
    addAndDeleteGalleryItemLike: (itemId, userId, isAdd) => {
        const galleryRef = firestore()
            .collection(firestoreLib.nftLiveTop.collection)
            .doc(firestoreLib.nftLiveTop.doc);

        firestore().runTransaction(transaction => {
            return transaction.get(galleryRef).then(doc => {
                const gallery = doc.data()[firestoreLib.nftLiveTop.arrayName];

                const itemIndex = gallery.findIndex(item => item.id === itemId);
                if (isAdd) {
                    gallery[itemIndex].likes.push(userId);
                } else {
                    gallery[itemIndex].likes = gallery[itemIndex].likes.filter(item => item !== userId);
                }

                transaction.update(galleryRef, {[firestoreLib.nftLiveTop.arrayName]: gallery});
            });
        });
    },
    addRetweetsGalleryItem: (itemId) => {
        const galleryRef = firestore()
            .collection(firestoreLib.nftLiveTop.collection)
            .doc(firestoreLib.nftLiveTop.doc);

        firestore().runTransaction(transaction => {
            return transaction.get(galleryRef).then(doc => {
                const gallery = doc.data()[firestoreLib.nftLiveTop.arrayName];

                const itemIndex = gallery.findIndex(item => item.id === itemId);

                gallery[itemIndex].retweets += 1;

                transaction.update(galleryRef, {[firestoreLib.nftLiveTop.arrayName]: gallery});
            });
        });
    },
    updateNftLiveTopItemByAuthorId: (authorId, fields) => {
        const galleryRef = firestore()
            .collection(firestoreLib.nftLiveTop.collection)
            .doc(firestoreLib.nftLiveTop.doc);

        firestore().runTransaction(transaction => {
            return transaction.get(galleryRef).then(doc => {
                const gallery = doc.data()[firestoreLib.nftLiveTop.arrayName];

                gallery.map(item => {
                    for (const key in fields) {
                        if (item.authorId === authorId) {
                            item[key] = fields[key];
                        }
                    }
                    return item;
                });
                transaction.update(galleryRef, {[firestoreLib.nftLiveTop.arrayName]: gallery});
            });
        });
    },
};
