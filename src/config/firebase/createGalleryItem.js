import {addImgToFirebaseStorage} from './addImgToFirebaseStorage';
import {nftSellEnded} from '../module/nftSellEnded';
import {GalleryItemModel} from '../../model';

export const createGalleryItem = async (user, formData, publish, isNftLiveTop) => {
    const {id, avatarUrl, nikName, avatarBackground} = user;
    const {collectionName, nftName, bio, price, uploadImage} = formData;

    const {pathStorage, nftImgUrl} = await addImgToFirebaseStorage(id, uploadImage);
    const {selEnded, createDate} = nftSellEnded();

    return new GalleryItemModel({
        nftImgUrl,
        collectionName,
        nftName,
        selEnded,
        createDate,
        publish,
        authorId: id,
        nftBio: bio,
        ethPrice: price,
        nftFirebasePath: pathStorage,
        authorAvatar: avatarUrl,
        authorNikName: nikName,
        authorBackground: avatarBackground,
        isNftLiveTop,
    });
};