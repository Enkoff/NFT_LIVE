import {firestore} from '../config/firebase/firebase.config';
import {firestoreLib} from '../constants';

export const onboardingService = {
    getAll: firestore()
        .collection(firestoreLib.onboarding.collection)
        .doc(firestoreLib.onboarding.doc)
        .get()
        .then(response => response.data())
        .then(onboarding => onboarding[firestoreLib.onboarding.arrayName])
};
