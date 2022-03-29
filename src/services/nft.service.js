import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const nftService = {
    getNftLiveTop: async () => {
        const res = (await firestore()
            .collection(firestoreLib.nft.collection)
            .orderBy('soldSum', 'desc')
            .orderBy('createDate', 'desc')
            .where('isNftLiveTop', '==', true)
            .get()).docs;
        const respData = [];
        res.forEach(nft => {
            respData.push(nft.data());
        });
        return respData;
    },
};
