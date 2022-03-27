import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const faqService = {
    getAll: () => firestore()
        .collection(firestoreLib.faq.collection)
        .doc(firestoreLib.faq.doc)
        .get()
        .then(res => res.data())
        .then(faq => faq[firestoreLib.faq.arrayName])
};
