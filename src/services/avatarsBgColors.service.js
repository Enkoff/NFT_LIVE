import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const avatarsBgColorsService = {
    getAll: firestore()
        .collection(firestoreLib.avatarsColorChange.collection)
        .doc(firestoreLib.avatarsColorChange.doc)
        .get()
        .then(response => response.data())
        .then(onboarding => onboarding[firestoreLib.avatarsColorChange.arrayName])
};
