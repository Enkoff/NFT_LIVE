import React, {useRef} from 'react';

import LoadingScreen from '../LoadingScreen/LoadingScreen';
import {
    PublishTitle,
    PublishCarousel,
    PublishButtons
} from '../../Components/Publish';

const PublishScreen = ({route: {params: {formData}}}) => {
    const carouselRef = useRef(null);

    return (
        <>
            <LoadingScreen isIcons={false}>
                <PublishTitle/>
                <PublishCarousel carouselRef={carouselRef}/>
            </LoadingScreen>
            <PublishButtons formData={formData} carouselRef={carouselRef}/>
        </>
    );
};

export default PublishScreen;


//await dispatch(addGalleryItem(id, nikName, avatarUrl, gallery, nftName, nftBio, price, collectionName, uploadImage, {}, false));
//await dispatch(addGalleryItem(id, nikName, avatarUrl, gallery, nftName, nftBio, price, collectionName, uploadImage, publish[carouselRef.current._activeItem], true, nftLiveTop));




