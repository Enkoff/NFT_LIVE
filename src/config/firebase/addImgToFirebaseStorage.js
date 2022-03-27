import {storage} from './firebase.config';

export const addImgToFirebaseStorage = async (userId, imgPath) => {
    const uploadUri = imgPath;
    const filename = `userId:_${userId}__${uploadUri.substring(uploadUri.lastIndexOf('/') + 1)}`;
    const pathStorage = `user_gallery/${userId}/${filename}`;

    await storage().ref(pathStorage).putFile(uploadUri);
    const nftImgUrl = await storage().ref(pathStorage).getDownloadURL();

    return {pathStorage, nftImgUrl};
};