import {storage} from './firebase.config';

export const addAvatarToFirebaseStorage = async (userId, imgPath) => {
    const uploadUri = imgPath;
    const filename = `userId:_${userId}__${uploadUri.substring(uploadUri.lastIndexOf('/') + 1)}`;
    const imgStoragePath = `user_avatars/${userId}/${filename}`;

    await storage().ref(imgStoragePath).putFile(uploadUri);
    const storageImgURL = await storage().ref(imgStoragePath).getDownloadURL();

    return {storageImgURL, imgStoragePath};
};