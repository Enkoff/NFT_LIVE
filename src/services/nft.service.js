import {firestore} from '../config/firebase/firebase.config';
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
    updateNftNikNamesByUid: async (uid, authorNikName) => {
        await firestore()
            .collection(firestoreLib.nft.collection)
            .where(firestoreLib.where.authorId, '==', uid)
            .get()
            .then(snapshot => {
                const batch = firestore().batch();
                snapshot.docs.forEach(doc => {
                    const nftRef = doc.ref;
                    batch.update(nftRef, {authorNikName});
                });
                batch.commit();
            });
    },
};
