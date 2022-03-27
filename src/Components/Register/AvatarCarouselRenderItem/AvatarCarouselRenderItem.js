import React from 'react';

import CarouselUploadRenderItem from '../CarouselUploadRenderItem/CarouselUploadRenderItem';
import CarouselAvatarRenderItem from '../CarouselAvatarRenderItem/CarouselAvatarRenderItem';

const AvatarCarouselRenderItem = ({item, setIsPopup, isEditProfile, isPopup}) => {
    const {id, imgURL, initialBg} = item;

    if (id === 'upload') {
        return <CarouselUploadRenderItem item={item} isEditProfile={isEditProfile}/>;
    }

    return <CarouselAvatarRenderItem isPopup={isPopup} item={item} setIsPopup={setIsPopup} isEditProfile={isEditProfile}/>;
};

export default AvatarCarouselRenderItem;