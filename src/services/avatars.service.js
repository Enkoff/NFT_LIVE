import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const avatarsService = {
    getAll: firestore()
        .collection(firestoreLib.registrationAvatar.collection)
        .doc(firestoreLib.registrationAvatar.doc)
        .get()
        .then(response => response.data())
        .then(onboarding => onboarding[firestoreLib.registrationAvatar.arrayName])
};
