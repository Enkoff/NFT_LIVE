import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const publishService = {
    getAll: firestore()
        .collection(firestoreLib.publish.collection)
        .doc(firestoreLib.publish.doc)
        .get()
        .then(response => response.data())
        .then(onboarding => onboarding[firestoreLib.publish.arrayName])
};
